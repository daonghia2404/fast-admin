import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import { navigate } from '@reach/router';

import { LayoutPaths } from '@/pages/routers';

import AuthControllerInstance from './api/auth-controller';
import authHelpers from './helpers';
import { EResponseCode } from '@/common/enums';

type TTokenSubscribers = (error: Error | null, accessToken?: string) => void;

let isRefreshingAccessToken = false;
let tokenSubscribers: TTokenSubscribers[] = [];

const AuthorizedInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
  });

  const refreshTokens = async (): Promise<string> => {
    const existingRefreshToken: string = authHelpers.getRefreshToken();

    if (!existingRefreshToken) {
      navigate(LayoutPaths.Auth);
    }

    const response = await AuthControllerInstance.refreshToken({});

    authHelpers.storeAccessToken('');
    authHelpers.storeRefreshToken('');

    return authHelpers.getAccessToken();
  };

  const onRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
    const authBearer = authHelpers.getAccessToken();

    if (authBearer) {
      request.headers.Authorization = `Bearer ${authBearer}`;
    }

    return request;
  };

  const onTokenRefreshed = (error: Error | null, newAccessToken?: string): void => {
    tokenSubscribers.map((cb: (error: Error | null, newAccessToken?: string) => void) => cb(error, newAccessToken));
  };

  const onResponseSuccess = (response: AxiosResponse): AxiosResponse => response;

  const onResponseError = async (axiosError: AxiosError): Promise<void | AxiosResponse<any>> => {
    const { response } = axiosError;
    const responseStatus = response?.status;
    const originalRequest = axiosError.config;
    const isNotRefreshTokenRequest = originalRequest.url !== 'refresh-token';

    if (responseStatus === EResponseCode.UNAUTHORIZED && originalRequest && isNotRefreshTokenRequest) {
      if (!isRefreshingAccessToken) {
        isRefreshingAccessToken = true;
        refreshTokens()
          .then((newAccessToken) => {
            onTokenRefreshed(null, newAccessToken);
          })
          .catch((err: AxiosError) => {
            onTokenRefreshed(new Error('Failed to refresh access token'));
            const refreshTokenFailed = err?.response?.config?.url === 'refresh-token';
            if (refreshTokenFailed) {
              authHelpers.clearTokens();
              navigate(LayoutPaths.Auth);
            }
          })
          .finally(() => {
            isRefreshingAccessToken = false;
            tokenSubscribers = [];
          });
      }

      const storeOriginalRequest: Promise<void | AxiosResponse<any>> = new Promise((resolve, reject) => {
        tokenSubscribers.push((error: Error | null, newAccessToken?: string) => {
          if (error) return reject(error);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return resolve(axios(originalRequest));
        });
      });

      return storeOriginalRequest;
    }

    return Promise.reject(axiosError);
  };

  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponseSuccess, onResponseError);

  return instance;
};

export default AuthorizedInstance;

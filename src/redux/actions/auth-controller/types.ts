import { TLoginBody, TLoginResponse } from '@/services/api/auth-controller/types';
import { EAuthControllerAction } from './constants';

export type TLoginRequest = {
  type: EAuthControllerAction.LOGIN_REQUEST;
  payload: {
    body: TLoginBody;
    cb?: (response: TLoginResponse) => void;
  };
};

export type TLoginSuccess = {
  type: EAuthControllerAction.LOGIN_SUCCESS;
  payload: { response: TLoginResponse };
};

export type TLoginFailed = { type: EAuthControllerAction.LOGIN_FAILED; payload: { error: unknown } };

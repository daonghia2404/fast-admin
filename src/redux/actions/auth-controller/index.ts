import { createActionCreator } from 'deox';

import { TLoginFailed, TLoginRequest, TLoginSuccess } from '@/redux/actions/auth-controller/types';
import { TLoginBody, TLoginResponse } from '@/services/api/auth-controller/types';

import { EAuthControllerAction } from './constants';

export const loginAction = {
  request: createActionCreator(
    EAuthControllerAction.LOGIN_REQUEST,
    (resolve) =>
      (body: TLoginBody, cb?: (response: TLoginResponse) => void): TLoginRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.LOGIN_SUCCESS,
    (resolve) =>
      (response: TLoginResponse): TLoginSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.LOGIN_FAILED,
    (resolve) =>
      (error: unknown): TLoginFailed =>
        resolve({ error }),
  ),
};

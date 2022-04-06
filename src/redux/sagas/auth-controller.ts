import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import authHelpers from '@/services/helpers';
import AuthControllerInstance from '@/services/api/auth-controller';
import { loginAction } from '@/redux/actions';
import { TLoginResponse } from '@/services/api/auth-controller/types';

export function* loginSaga(action: ActionType<typeof loginAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.login, body)) as TLoginResponse;

    authHelpers.storeAccessToken('');
    authHelpers.storeRefreshToken('');

    yield put(loginAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(loginAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(loginAction.request.type, loginSaga)]);
}

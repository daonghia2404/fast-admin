import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import authHelpers from '@/services/helpers';
import AuthControllerInstance from '@/services/api/auth-controller';
import {
  changePasswordByOtpAction,
  confirmEmailOtpAction,
  forgotPasswordAction,
  getUserInfoAction,
  loginAction,
  registerAction,
  resendEmailOtpAction,
} from '@/redux/actions';
import {
  TChangePasswordByOtpResponse,
  TConfirmEmailOtpResponse,
  TForgotPasswordResponse,
  TGetUserInfoResponse,
  TLoginResponse,
  TRegisterResponse,
  TResendEmailOtpResponse,
} from '@/services/api/auth-controller/types';

export function* loginSaga(action: ActionType<typeof loginAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.login, body)) as TLoginResponse;

    authHelpers.storeAccessToken(response.data.token);
    authHelpers.storeRefreshToken('');

    yield put(loginAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(loginAction.failure(err));
  }
}

export function* registerSaga(action: ActionType<typeof registerAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.register, body)) as TRegisterResponse;

    yield put(registerAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(registerAction.failure(err));
  }
}

export function* forgotPasswordSaga(action: ActionType<typeof forgotPasswordAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.forgotPassword, body)) as TForgotPasswordResponse;

    yield put(forgotPasswordAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(forgotPasswordAction.failure(err));
  }
}

export function* confirmEmailOtpSaga(action: ActionType<typeof confirmEmailOtpAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.confirmEmailOtp, body)) as TConfirmEmailOtpResponse;

    yield put(confirmEmailOtpAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(confirmEmailOtpAction.failure(err));
  }
}

export function* resendEmailOtpSaga(action: ActionType<typeof resendEmailOtpAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.resendEmailOtp, body)) as TResendEmailOtpResponse;

    yield put(resendEmailOtpAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(resendEmailOtpAction.failure(err));
  }
}

export function* changePasswordByOtpSaga(action: ActionType<typeof changePasswordByOtpAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.changePasswordByOtp, body)) as TChangePasswordByOtpResponse;

    yield put(changePasswordByOtpAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(changePasswordByOtpAction.failure(err));
  }
}

export function* getUserInfoSaga(action: ActionType<typeof getUserInfoAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.getUserInfo)) as TGetUserInfoResponse;

    yield put(getUserInfoAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getUserInfoAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(loginAction.request.type, loginSaga)]);
  yield all([takeLatest(registerAction.request.type, registerSaga)]);
  yield all([takeLatest(forgotPasswordAction.request.type, forgotPasswordSaga)]);
  yield all([takeLatest(confirmEmailOtpAction.request.type, confirmEmailOtpSaga)]);
  yield all([takeLatest(resendEmailOtpAction.request.type, resendEmailOtpSaga)]);
  yield all([takeLatest(changePasswordByOtpAction.request.type, changePasswordByOtpSaga)]);
  yield all([takeLatest(getUserInfoAction.request.type, getUserInfoSaga)]);
}

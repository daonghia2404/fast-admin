import { createActionCreator } from 'deox';

import {
  TChangePasswordByOtpFailed,
  TChangePasswordByOtpRequest,
  TChangePasswordByOtpSuccess,
  TConfirmEmailOtpFailed,
  TConfirmEmailOtpRequest,
  TConfirmEmailOtpSuccess,
  TForgotPasswordFailed,
  TForgotPasswordRequest,
  TForgotPasswordSuccess,
  TGetUserInfoFailed,
  TGetUserInfoRequest,
  TGetUserInfoSuccess,
  TLoginFailed,
  TLoginRequest,
  TLoginSuccess,
  TRegisterFailed,
  TRegisterRequest,
  TRegisterSuccess,
  TResendEmailOtpFailed,
  TResendEmailOtpRequest,
  TResendEmailOtpSuccess,
  TUpdateUserInfoFailed,
  TUpdateUserInfoRequest,
  TUpdateUserInfoSuccess,
} from '@/redux/actions/auth-controller/types';
import {
  TChangePasswordByOtpBody,
  TChangePasswordByOtpResponse,
  TConfirmEmailOtpBody,
  TConfirmEmailOtpResponse,
  TForgotPasswordBody,
  TForgotPasswordResponse,
  TGetUserInfoResponse,
  TLoginBody,
  TLoginResponse,
  TRegisterBody,
  TRegisterResponse,
  TResendEmailOtpBody,
  TResendEmailOtpResponse,
  TUpdateUserInfoBody,
  TUpdateUserInfoResponse,
} from '@/services/api/auth-controller/types';

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

export const registerAction = {
  request: createActionCreator(
    EAuthControllerAction.REGISTER_REQUEST,
    (resolve) =>
      (body: TRegisterBody, cb?: (response: TRegisterResponse) => void): TRegisterRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.REGISTER_SUCCESS,
    (resolve) =>
      (response: TRegisterResponse): TRegisterSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.REGISTER_FAILED,
    (resolve) =>
      (error: unknown): TRegisterFailed =>
        resolve({ error }),
  ),
};

export const forgotPasswordAction = {
  request: createActionCreator(
    EAuthControllerAction.FORGOT_PASSWORD_REQUEST,
    (resolve) =>
      (body: TForgotPasswordBody, cb?: (response: TForgotPasswordResponse) => void): TForgotPasswordRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.FORGOT_PASSWORD_SUCCESS,
    (resolve) =>
      (response: TForgotPasswordResponse): TForgotPasswordSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.FORGOT_PASSWORD_FAILED,
    (resolve) =>
      (error: unknown): TForgotPasswordFailed =>
        resolve({ error }),
  ),
};

export const confirmEmailOtpAction = {
  request: createActionCreator(
    EAuthControllerAction.CONFIRM_EMAIL_OTP_REQUEST,
    (resolve) =>
      (body: TConfirmEmailOtpBody, cb?: (response: TConfirmEmailOtpResponse) => void): TConfirmEmailOtpRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.CONFIRM_EMAIL_OTP_SUCCESS,
    (resolve) =>
      (response: TConfirmEmailOtpResponse): TConfirmEmailOtpSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.CONFIRM_EMAIL_OTP_FAILED,
    (resolve) =>
      (error: unknown): TConfirmEmailOtpFailed =>
        resolve({ error }),
  ),
};

export const resendEmailOtpAction = {
  request: createActionCreator(
    EAuthControllerAction.RESEND_EMAIL_OTP_REQUEST,
    (resolve) =>
      (body: TResendEmailOtpBody, cb?: (response: TResendEmailOtpResponse) => void): TResendEmailOtpRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.RESEND_EMAIL_OTP_SUCCESS,
    (resolve) =>
      (response: TResendEmailOtpResponse): TResendEmailOtpSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.RESEND_EMAIL_OTP_FAILED,
    (resolve) =>
      (error: unknown): TResendEmailOtpFailed =>
        resolve({ error }),
  ),
};

export const changePasswordByOtpAction = {
  request: createActionCreator(
    EAuthControllerAction.CHANGE_PASSWORD_BY_OTP_REQUEST,
    (resolve) =>
      (
        body: TChangePasswordByOtpBody,
        cb?: (response: TChangePasswordByOtpResponse) => void,
      ): TChangePasswordByOtpRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.CHANGE_PASSWORD_BY_OTP_SUCCESS,
    (resolve) =>
      (response: TChangePasswordByOtpResponse): TChangePasswordByOtpSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.CHANGE_PASSWORD_BY_OTP_FAILED,
    (resolve) =>
      (error: unknown): TChangePasswordByOtpFailed =>
        resolve({ error }),
  ),
};

export const getUserInfoAction = {
  request: createActionCreator(
    EAuthControllerAction.GET_USER_INFO_REQUEST,
    (resolve) =>
      (cb?: (response: TGetUserInfoResponse) => void): TGetUserInfoRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.GET_USER_INFO_SUCCESS,
    (resolve) =>
      (response: TGetUserInfoResponse): TGetUserInfoSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.GET_USER_INFO_FAILED,
    (resolve) =>
      (error: unknown): TGetUserInfoFailed =>
        resolve({ error }),
  ),
};

export const updateUserInfoAction = {
  request: createActionCreator(
    EAuthControllerAction.UPDATE_USER_INFO_REQUEST,
    (resolve) =>
      (body: TUpdateUserInfoBody, cb?: (response: TUpdateUserInfoResponse) => void): TUpdateUserInfoRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.UPDATE_USER_INFO_SUCCESS,
    (resolve) =>
      (response: TUpdateUserInfoResponse): TUpdateUserInfoSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.UPDATE_USER_INFO_FAILED,
    (resolve) =>
      (error: unknown): TUpdateUserInfoFailed =>
        resolve({ error }),
  ),
};

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
} from '@/services/api/auth-controller/types';
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

export type TRegisterRequest = {
  type: EAuthControllerAction.REGISTER_REQUEST;
  payload: {
    body: TRegisterBody;
    cb?: (response: TRegisterResponse) => void;
  };
};

export type TRegisterSuccess = {
  type: EAuthControllerAction.REGISTER_SUCCESS;
  payload: { response: TRegisterResponse };
};

export type TRegisterFailed = { type: EAuthControllerAction.REGISTER_FAILED; payload: { error: unknown } };

export type TForgotPasswordRequest = {
  type: EAuthControllerAction.FORGOT_PASSWORD_REQUEST;
  payload: {
    body: TForgotPasswordBody;
    cb?: (response: TForgotPasswordResponse) => void;
  };
};

export type TForgotPasswordSuccess = {
  type: EAuthControllerAction.FORGOT_PASSWORD_SUCCESS;
  payload: { response: TForgotPasswordResponse };
};

export type TForgotPasswordFailed = { type: EAuthControllerAction.FORGOT_PASSWORD_FAILED; payload: { error: unknown } };

export type TConfirmEmailOtpRequest = {
  type: EAuthControllerAction.CONFIRM_EMAIL_OTP_REQUEST;
  payload: {
    body: TConfirmEmailOtpBody;
    cb?: (response: TConfirmEmailOtpResponse) => void;
  };
};

export type TConfirmEmailOtpSuccess = {
  type: EAuthControllerAction.CONFIRM_EMAIL_OTP_SUCCESS;
  payload: { response: TConfirmEmailOtpResponse };
};

export type TConfirmEmailOtpFailed = {
  type: EAuthControllerAction.CONFIRM_EMAIL_OTP_FAILED;
  payload: { error: unknown };
};

export type TResendEmailOtpRequest = {
  type: EAuthControllerAction.RESEND_EMAIL_OTP_REQUEST;
  payload: {
    body: TResendEmailOtpBody;
    cb?: (response: TResendEmailOtpResponse) => void;
  };
};

export type TResendEmailOtpSuccess = {
  type: EAuthControllerAction.RESEND_EMAIL_OTP_SUCCESS;
  payload: { response: TResendEmailOtpResponse };
};

export type TResendEmailOtpFailed = {
  type: EAuthControllerAction.RESEND_EMAIL_OTP_FAILED;
  payload: { error: unknown };
};

export type TChangePasswordByOtpRequest = {
  type: EAuthControllerAction.CHANGE_PASSWORD_BY_OTP_REQUEST;
  payload: {
    body: TChangePasswordByOtpBody;
    cb?: (response: TChangePasswordByOtpResponse) => void;
  };
};

export type TChangePasswordByOtpSuccess = {
  type: EAuthControllerAction.CHANGE_PASSWORD_BY_OTP_SUCCESS;
  payload: { response: TChangePasswordByOtpResponse };
};

export type TChangePasswordByOtpFailed = {
  type: EAuthControllerAction.CHANGE_PASSWORD_BY_OTP_FAILED;
  payload: { error: unknown };
};

export type TGetUserInfoRequest = {
  type: EAuthControllerAction.GET_USER_INFO_REQUEST;
  payload: {
    cb?: (response: TGetUserInfoResponse) => void;
  };
};

export type TGetUserInfoSuccess = {
  type: EAuthControllerAction.GET_USER_INFO_SUCCESS;
  payload: { response: TGetUserInfoResponse };
};

export type TGetUserInfoFailed = {
  type: EAuthControllerAction.GET_USER_INFO_FAILED;
  payload: { error: unknown };
};

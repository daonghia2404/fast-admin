import { TCommonResponse } from '@/common/types';

export type TLoginBody = {
  phone: string;
  password: string;
};

export type TLoginResponse = TCommonResponse & {
  data: {
    token: string;
  };
};

export type TRefreshTokenBody = unknown;

export type TRefreshTokenResponse = unknown;

export type TRegisterBody = {
  clientCode: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
};

export type TRegisterResponse = unknown;

export type TForgotPasswordBody = { email: string };
export type TForgotPasswordResponse = unknown;
export type TConfirmEmailOtpBody = { email: string; otp: string };
export type TConfirmEmailOtpResponse = unknown;
export type TResendEmailOtpBody = { email: string };
export type TResendEmailOtpResponse = unknown;
export type TChangePasswordByOtpBody = {
  otp: string;
  email: string;
  newPassword: string;
};
export type TChangePasswordByOtpResponse = unknown;

export type TGetUserInfoResponse = unknown;

import Service from '@/services/api';
import {
  TChangePasswordByOtpBody,
  TChangePasswordByOtpResponse,
  TConfirmEmailOtpBody,
  TConfirmEmailOtpResponse,
  TForgotPasswordBody,
  TForgotPasswordResponse,
  TLoginBody,
  TLoginResponse,
  TRefreshTokenBody,
  TRefreshTokenResponse,
  TRegisterBody,
  TRegisterResponse,
  TResendEmailOtpBody,
  TResendEmailOtpResponse,
} from '@/services/api/auth-controller/types';

class Controller {
  login = async (body: TLoginBody): Promise<TLoginResponse> => {
    const response = await Service.post('/api/Account/signin', body);
    return response.data;
  };

  register = async (body: TRegisterBody): Promise<TRegisterResponse> => {
    const response = await Service.post('/api/Account/register', body);
    return response.data;
  };

  forgotPassword = async (body: TForgotPasswordBody): Promise<TForgotPasswordResponse> => {
    const response = await Service.post('/api/Account/forgotPassword', body);
    return response.data;
  };

  confirmEmailOtp = async (body: TConfirmEmailOtpBody): Promise<TConfirmEmailOtpResponse> => {
    const response = await Service.post('/api/Account/confirmEmailOTP', body);
    return response.data;
  };

  resendEmailOtp = async (body: TResendEmailOtpBody): Promise<TResendEmailOtpResponse> => {
    const response = await Service.post('/api/Account/resendOTPEmail', body);
    return response.data;
  };

  changePasswordByOtp = async (body: TChangePasswordByOtpBody): Promise<TChangePasswordByOtpResponse> => {
    const response = await Service.post('/api/Account/reCreatePasswordByOtp', body);
    return response.data;
  };

  refreshToken = async (body: TRefreshTokenBody): Promise<TRefreshTokenResponse> => {
    const response = await Service.post('/admin/refresh-token', body);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;

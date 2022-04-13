export enum EAuthControllerAction {
  LOGIN = 'LOGIN',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILED = 'LOGIN_FAILED',

  REGISTER = 'REGISTER',
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILED = 'REGISTER_FAILED',

  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED',

  CONFIRM_EMAIL_OTP = 'CONFIRM_EMAIL_OTP',
  CONFIRM_EMAIL_OTP_REQUEST = 'CONFIRM_EMAIL_OTP_REQUEST',
  CONFIRM_EMAIL_OTP_SUCCESS = 'CONFIRM_EMAIL_OTP_SUCCESS',
  CONFIRM_EMAIL_OTP_FAILED = 'CONFIRM_EMAIL_OTP_FAILED',

  RESEND_EMAIL_OTP = 'RESEND_EMAIL_OTP',
  RESEND_EMAIL_OTP_REQUEST = 'RESEND_EMAIL_OTP_REQUEST',
  RESEND_EMAIL_OTP_SUCCESS = 'RESEND_EMAIL_OTP_SUCCESS',
  RESEND_EMAIL_OTP_FAILED = 'RESEND_EMAIL_OTP_FAILED',

  CHANGE_PASSWORD_BY_OTP = 'CHANGE_PASSWORD_BY_OTP',
  CHANGE_PASSWORD_BY_OTP_REQUEST = 'CHANGE_PASSWORD_BY_OTP_REQUEST',
  CHANGE_PASSWORD_BY_OTP_SUCCESS = 'CHANGE_PASSWORD_BY_OTP_SUCCESS',
  CHANGE_PASSWORD_BY_OTP_FAILED = 'CHANGE_PASSWORD_BY_OTP_FAILED',

  GET_USER_INFO = 'GET_USER_INFO',
  GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST',
  GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_FAILED = 'GET_USER_INFO_FAILED',

  UPDATE_USER_INFO = 'UPDATE_USER_INFO',
  UPDATE_USER_INFO_REQUEST = 'UPDATE_USER_INFO_REQUEST',
  UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS',
  UPDATE_USER_INFO_FAILED = 'UPDATE_USER_INFO_FAILED',
}

import cookie from 'react-cookies';

import env from '@/env';

const COOKIE_DOMAIN = env.cookie.domain;
const COOKIE_ACCESS_TOKEN = `atk`;
const COOKIE_REFRESH_TOKEN = `rtk`;
const COOKIE_REMEMBER_ACCOUNT_PHONE = `raphone`;
const COOKIE_REMEMBER_ACCOUNT_PASSWORD = `rapassword`;
// const MAXIMUM_EXPIRES_TIME = 2147483647;

const cookieSetting = {
  path: '/',
  domain: COOKIE_DOMAIN,
  // secure: true,
  // httpOnly: true,
  // expires: MAXIMUM_EXPIRES_TIME,
};

const setCookie = (name: string, value: string): void => cookie.save(name, value, cookieSetting);

const getCookie = (name: string): string => cookie.load(name);

const removeCookie = (name: string): void => cookie.remove(name, cookieSetting);

class AuthHelpers {
  getRefreshToken = (): string => getCookie(COOKIE_REFRESH_TOKEN);

  storeRefreshToken = (refreshToken: string): void => setCookie(COOKIE_REFRESH_TOKEN, refreshToken);

  getAccessToken = (): string => getCookie(COOKIE_ACCESS_TOKEN);

  storeAccessToken = (accessToken: string): void => setCookie(COOKIE_ACCESS_TOKEN, accessToken);

  getRememberAccountPhone = (): string => getCookie(COOKIE_REMEMBER_ACCOUNT_PHONE);

  storeRememberAccountPhone = (phone: string): void => setCookie(COOKIE_REMEMBER_ACCOUNT_PHONE, phone);

  getRememberAccountPassword = (): string => getCookie(COOKIE_REMEMBER_ACCOUNT_PASSWORD);

  storeRememberAccountPassword = (password: string): void => setCookie(COOKIE_REMEMBER_ACCOUNT_PASSWORD, password);

  clearTokens = (): void => {
    removeCookie(COOKIE_REFRESH_TOKEN);
    removeCookie(COOKIE_ACCESS_TOKEN);
  };

  clearRememberAccount = (): void => {
    removeCookie(COOKIE_REMEMBER_ACCOUNT_PHONE);
    removeCookie(COOKIE_REMEMBER_ACCOUNT_PASSWORD);
  };
}

const instance = new AuthHelpers();
export default instance;

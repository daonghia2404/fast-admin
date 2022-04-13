import { EAccountControllerAction } from '@/redux/actions/account-controller/constants';
import {
  TChangePasswordAccountBody,
  TChangePasswordAccountResponse,
  TCreateUpdateAccountResponse,
  TCreateUpdateAccountsBody,
  TDeleteAccountParams,
  TDeleteAccountResponse,
  TGetAccountParams,
  TGetAccountResponse,
  TGetAccountsBody,
  TGetAccountsResponse,
  TGetAllRolesResponse,
} from '@/services/api/account-controller/types';

export type TGetAccountsRequest = {
  type: EAccountControllerAction.GET_ACCOUNTS_REQUEST;
  payload: {
    body: TGetAccountsBody;
    cb?: (response: TGetAccountsResponse) => void;
  };
};

export type TGetAccountsSuccess = {
  type: EAccountControllerAction.GET_ACCOUNTS_SUCCESS;
  payload: { response: TGetAccountsResponse };
};

export type TGetAccountsFailed = { type: EAccountControllerAction.GET_ACCOUNTS_FAILED; payload: { error: unknown } };

export type TGetAccountRequest = {
  type: EAccountControllerAction.GET_ACCOUNT_REQUEST;
  payload: {
    params: TGetAccountParams;
    cb?: (response: TGetAccountResponse) => void;
  };
};

export type TGetAccountSuccess = {
  type: EAccountControllerAction.GET_ACCOUNT_SUCCESS;
  payload: { response: TGetAccountResponse };
};

export type TGetAccountFailed = { type: EAccountControllerAction.GET_ACCOUNT_FAILED; payload: { error: unknown } };

export type TGetAllRolesRequest = {
  type: EAccountControllerAction.GET_ALL_ROLES_REQUEST;
  payload: {
    cb?: (response: TGetAllRolesResponse) => void;
  };
};

export type TGetAllRolesSuccess = {
  type: EAccountControllerAction.GET_ALL_ROLES_SUCCESS;
  payload: { response: TGetAllRolesResponse };
};

export type TGetAllRolesFailed = { type: EAccountControllerAction.GET_ALL_ROLES_FAILED; payload: { error: unknown } };

export type TCreateUpdateAccountRequest = {
  type: EAccountControllerAction.CREATE_UPDATE_ACCOUNT_REQUEST;
  payload: {
    body: TCreateUpdateAccountsBody;
    cb?: (response: TCreateUpdateAccountResponse) => void;
  };
};

export type TCreateUpdateAccountSuccess = {
  type: EAccountControllerAction.CREATE_UPDATE_ACCOUNT_SUCCESS;
  payload: { response: TCreateUpdateAccountResponse };
};

export type TCreateUpdateAccountFailed = {
  type: EAccountControllerAction.CREATE_UPDATE_ACCOUNT_FAILED;
  payload: { error: unknown };
};

export type TDeleteAccountRequest = {
  type: EAccountControllerAction.DELETE_ACCOUNT_REQUEST;
  payload: {
    params: TDeleteAccountParams;
    cb?: (response: TDeleteAccountResponse) => void;
  };
};

export type TDeleteAccountSuccess = {
  type: EAccountControllerAction.DELETE_ACCOUNT_SUCCESS;
  payload: { response: TDeleteAccountResponse };
};

export type TDeleteAccountFailed = {
  type: EAccountControllerAction.DELETE_ACCOUNT_FAILED;
  payload: { error: unknown };
};

export type TChangePasswordAccountRequest = {
  type: EAccountControllerAction.CHANGE_PASSWORD_ACCOUNT_REQUEST;
  payload: {
    body: TChangePasswordAccountBody;
    cb?: (response: TChangePasswordAccountResponse) => void;
  };
};

export type TChangePasswordAccountSuccess = {
  type: EAccountControllerAction.CHANGE_PASSWORD_ACCOUNT_SUCCESS;
  payload: { response: TChangePasswordAccountResponse };
};

export type TChangePasswordAccountFailed = {
  type: EAccountControllerAction.CHANGE_PASSWORD_ACCOUNT_FAILED;
  payload: { error: unknown };
};

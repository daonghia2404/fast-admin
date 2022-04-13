import { createActionCreator } from 'deox';

import { EAccountControllerAction } from '@/redux/actions/account-controller/constants';
import {
  TGetAccountsRequest,
  TGetAccountsSuccess,
  TGetAccountsFailed,
  TGetAccountFailed,
  TGetAccountRequest,
  TGetAccountSuccess,
  TGetAllRolesFailed,
  TGetAllRolesRequest,
  TGetAllRolesSuccess,
  TCreateUpdateAccountFailed,
  TCreateUpdateAccountRequest,
  TCreateUpdateAccountSuccess,
  TDeleteAccountFailed,
  TDeleteAccountRequest,
  TDeleteAccountSuccess,
  TChangePasswordAccountRequest,
  TChangePasswordAccountFailed,
  TChangePasswordAccountSuccess,
} from '@/redux/actions/account-controller/types';
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

export const getAccountsAction = {
  request: createActionCreator(
    EAccountControllerAction.GET_ACCOUNTS_REQUEST,
    (resolve) =>
      (body: TGetAccountsBody, cb?: (response: TGetAccountsResponse) => void): TGetAccountsRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAccountControllerAction.GET_ACCOUNTS_SUCCESS,
    (resolve) =>
      (response: TGetAccountsResponse): TGetAccountsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAccountControllerAction.GET_ACCOUNTS_FAILED,
    (resolve) =>
      (error: unknown): TGetAccountsFailed =>
        resolve({ error }),
  ),
};

export const getAccountAction = {
  request: createActionCreator(
    EAccountControllerAction.GET_ACCOUNT_REQUEST,
    (resolve) =>
      (params: TGetAccountParams, cb?: (response: TGetAccountResponse) => void): TGetAccountRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EAccountControllerAction.GET_ACCOUNT_SUCCESS,
    (resolve) =>
      (response: TGetAccountResponse): TGetAccountSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAccountControllerAction.GET_ACCOUNT_FAILED,
    (resolve) =>
      (error: unknown): TGetAccountFailed =>
        resolve({ error }),
  ),
};

export const getAllRolesAction = {
  request: createActionCreator(
    EAccountControllerAction.GET_ALL_ROLES_REQUEST,
    (resolve) =>
      (cb?: (response: TGetAllRolesResponse) => void): TGetAllRolesRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EAccountControllerAction.GET_ALL_ROLES_SUCCESS,
    (resolve) =>
      (response: TGetAllRolesResponse): TGetAllRolesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAccountControllerAction.GET_ALL_ROLES_FAILED,
    (resolve) =>
      (error: unknown): TGetAllRolesFailed =>
        resolve({ error }),
  ),
};

export const createUpdateAccountAction = {
  request: createActionCreator(
    EAccountControllerAction.CREATE_UPDATE_ACCOUNT_REQUEST,
    (resolve) =>
      (
        body: TCreateUpdateAccountsBody,
        cb?: (response: TCreateUpdateAccountResponse) => void,
      ): TCreateUpdateAccountRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAccountControllerAction.CREATE_UPDATE_ACCOUNT_SUCCESS,
    (resolve) =>
      (response: TCreateUpdateAccountResponse): TCreateUpdateAccountSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAccountControllerAction.CREATE_UPDATE_ACCOUNT_FAILED,
    (resolve) =>
      (error: unknown): TCreateUpdateAccountFailed =>
        resolve({ error }),
  ),
};

export const deleteAccountAction = {
  request: createActionCreator(
    EAccountControllerAction.DELETE_ACCOUNT_REQUEST,
    (resolve) =>
      (params: TDeleteAccountParams, cb?: (response: TDeleteAccountResponse) => void): TDeleteAccountRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EAccountControllerAction.DELETE_ACCOUNT_SUCCESS,
    (resolve) =>
      (response: TDeleteAccountResponse): TDeleteAccountSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAccountControllerAction.DELETE_ACCOUNT_FAILED,
    (resolve) =>
      (error: unknown): TDeleteAccountFailed =>
        resolve({ error }),
  ),
};

export const changePasswordAccountAction = {
  request: createActionCreator(
    EAccountControllerAction.CHANGE_PASSWORD_ACCOUNT_REQUEST,
    (resolve) =>
      (
        body: TChangePasswordAccountBody,
        cb?: (response: TChangePasswordAccountResponse) => void,
      ): TChangePasswordAccountRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAccountControllerAction.CHANGE_PASSWORD_ACCOUNT_SUCCESS,
    (resolve) =>
      (response: TChangePasswordAccountResponse): TChangePasswordAccountSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAccountControllerAction.CHANGE_PASSWORD_ACCOUNT_FAILED,
    (resolve) =>
      (error: unknown): TChangePasswordAccountFailed =>
        resolve({ error }),
  ),
};

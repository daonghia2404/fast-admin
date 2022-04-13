import { createActionCreator } from 'deox';

import { EClientControllerAction } from '@/redux/actions/client-controller/constants';
import {
  TGetClientsRequest,
  TGetClientsSuccess,
  TGetClientsFailed,
  TGetClientFailed,
  TGetClientRequest,
  TGetClientSuccess,
  TGetClientEmployeeFailed,
  TGetClientEmployeeRequest,
  TGetClientEmployeeSuccess,
  TCreateUpdateClientFailed,
  TCreateUpdateClientRequest,
  TCreateUpdateClientSuccess,
  TDeleteClientFailed,
  TDeleteClientRequest,
  TDeleteClientSuccess,
} from '@/redux/actions/client-controller/types';
import {
  TCreateUpdateClientResponse,
  TCreateUpdateClientsBody,
  TDeleteClientParams,
  TDeleteClientResponse,
  TGetClientParams,
  TGetClientResponse,
  TGetClientsBody,
  TGetClientsResponse,
  TGetClientEmployeeResponse,
} from '@/services/api/client-controller/types';

export const getClientsAction = {
  request: createActionCreator(
    EClientControllerAction.GET_CLIENTS_REQUEST,
    (resolve) =>
      (body: TGetClientsBody, cb?: (response: TGetClientsResponse) => void): TGetClientsRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EClientControllerAction.GET_CLIENTS_SUCCESS,
    (resolve) =>
      (response: TGetClientsResponse): TGetClientsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EClientControllerAction.GET_CLIENTS_FAILED,
    (resolve) =>
      (error: unknown): TGetClientsFailed =>
        resolve({ error }),
  ),
};

export const getClientAction = {
  request: createActionCreator(
    EClientControllerAction.GET_CLIENT_REQUEST,
    (resolve) =>
      (params: TGetClientParams, cb?: (response: TGetClientResponse) => void): TGetClientRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EClientControllerAction.GET_CLIENT_SUCCESS,
    (resolve) =>
      (response: TGetClientResponse): TGetClientSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EClientControllerAction.GET_CLIENT_FAILED,
    (resolve) =>
      (error: unknown): TGetClientFailed =>
        resolve({ error }),
  ),
};

export const getClientEmployeeAction = {
  request: createActionCreator(
    EClientControllerAction.GET_CLIENT_EMPLOYEE_REQUEST,
    (resolve) =>
      (cb?: (response: TGetClientEmployeeResponse) => void): TGetClientEmployeeRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EClientControllerAction.GET_CLIENT_EMPLOYEE_SUCCESS,
    (resolve) =>
      (response: TGetClientEmployeeResponse): TGetClientEmployeeSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EClientControllerAction.GET_CLIENT_EMPLOYEE_FAILED,
    (resolve) =>
      (error: unknown): TGetClientEmployeeFailed =>
        resolve({ error }),
  ),
};

export const createUpdateClientAction = {
  request: createActionCreator(
    EClientControllerAction.CREATE_UPDATE_CLIENT_REQUEST,
    (resolve) =>
      (
        body: TCreateUpdateClientsBody,
        cb?: (response: TCreateUpdateClientResponse) => void,
      ): TCreateUpdateClientRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EClientControllerAction.CREATE_UPDATE_CLIENT_SUCCESS,
    (resolve) =>
      (response: TCreateUpdateClientResponse): TCreateUpdateClientSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EClientControllerAction.CREATE_UPDATE_CLIENT_FAILED,
    (resolve) =>
      (error: unknown): TCreateUpdateClientFailed =>
        resolve({ error }),
  ),
};

export const deleteClientAction = {
  request: createActionCreator(
    EClientControllerAction.DELETE_CLIENT_REQUEST,
    (resolve) =>
      (params: TDeleteClientParams, cb?: (response: TDeleteClientResponse) => void): TDeleteClientRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EClientControllerAction.DELETE_CLIENT_SUCCESS,
    (resolve) =>
      (response: TDeleteClientResponse): TDeleteClientSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EClientControllerAction.DELETE_CLIENT_FAILED,
    (resolve) =>
      (error: unknown): TDeleteClientFailed =>
        resolve({ error }),
  ),
};

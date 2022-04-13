import { EClientControllerAction } from '@/redux/actions/client-controller/constants';
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

export type TGetClientsRequest = {
  type: EClientControllerAction.GET_CLIENTS_REQUEST;
  payload: {
    body: TGetClientsBody;
    cb?: (response: TGetClientsResponse) => void;
  };
};

export type TGetClientsSuccess = {
  type: EClientControllerAction.GET_CLIENTS_SUCCESS;
  payload: { response: TGetClientsResponse };
};

export type TGetClientsFailed = { type: EClientControllerAction.GET_CLIENTS_FAILED; payload: { error: unknown } };

export type TGetClientRequest = {
  type: EClientControllerAction.GET_CLIENT_REQUEST;
  payload: {
    params: TGetClientParams;
    cb?: (response: TGetClientResponse) => void;
  };
};

export type TGetClientSuccess = {
  type: EClientControllerAction.GET_CLIENT_SUCCESS;
  payload: { response: TGetClientResponse };
};

export type TGetClientFailed = { type: EClientControllerAction.GET_CLIENT_FAILED; payload: { error: unknown } };

export type TGetClientEmployeeRequest = {
  type: EClientControllerAction.GET_CLIENT_EMPLOYEE_REQUEST;
  payload: {
    cb?: (response: TGetClientEmployeeResponse) => void;
  };
};

export type TGetClientEmployeeSuccess = {
  type: EClientControllerAction.GET_CLIENT_EMPLOYEE_SUCCESS;
  payload: { response: TGetClientEmployeeResponse };
};

export type TGetClientEmployeeFailed = {
  type: EClientControllerAction.GET_CLIENT_EMPLOYEE_FAILED;
  payload: { error: unknown };
};

export type TCreateUpdateClientRequest = {
  type: EClientControllerAction.CREATE_UPDATE_CLIENT_REQUEST;
  payload: {
    body: TCreateUpdateClientsBody;
    cb?: (response: TCreateUpdateClientResponse) => void;
  };
};

export type TCreateUpdateClientSuccess = {
  type: EClientControllerAction.CREATE_UPDATE_CLIENT_SUCCESS;
  payload: { response: TCreateUpdateClientResponse };
};

export type TCreateUpdateClientFailed = {
  type: EClientControllerAction.CREATE_UPDATE_CLIENT_FAILED;
  payload: { error: unknown };
};

export type TDeleteClientRequest = {
  type: EClientControllerAction.DELETE_CLIENT_REQUEST;
  payload: {
    params: TDeleteClientParams;
    cb?: (response: TDeleteClientResponse) => void;
  };
};

export type TDeleteClientSuccess = {
  type: EClientControllerAction.DELETE_CLIENT_SUCCESS;
  payload: { response: TDeleteClientResponse };
};

export type TDeleteClientFailed = {
  type: EClientControllerAction.DELETE_CLIENT_FAILED;
  payload: { error: unknown };
};

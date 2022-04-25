import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';
import {
  TGetDepotOrdersParams,
  TGetDepotOrdersResponse,
  TGetDepotOrdersReturnResponse,
  TGetDepotStoresParams,
  TGetDepotStoresResponse,
} from '@/services/api/depot-controller/types';

export type TGetDepotStoragesRequest = {
  type: EDepotControllerAction.GET_DEPOT_STORAGES_REQUEST;
  payload: {
    params: TGetDepotStoresParams;
    cb?: (response: TGetDepotStoresResponse) => void;
  };
};

export type TGetDepotStoragesSuccess = {
  type: EDepotControllerAction.GET_DEPOT_STORAGES_SUCCESS;
  payload: { response: TGetDepotStoresResponse };
};

export type TGetDepotStoragesFailed = {
  type: EDepotControllerAction.GET_DEPOT_STORAGES_FAILED;
  payload: { error: unknown };
};

export type TGetDepotStoragesSearchRequest = {
  type: EDepotControllerAction.GET_DEPOT_STORAGES_SEARCH_REQUEST;
  payload: {
    params: TGetDepotStoresParams;
    cb?: (response: TGetDepotStoresResponse) => void;
  };
};

export type TGetDepotStoragesSearchSuccess = {
  type: EDepotControllerAction.GET_DEPOT_STORAGES_SEARCH_SUCCESS;
  payload: { response: TGetDepotStoresResponse };
};

export type TGetDepotStoragesSearchFailed = {
  type: EDepotControllerAction.GET_DEPOT_STORAGES_SEARCH_FAILED;
  payload: { error: unknown };
};

export type TGetDepotOrdersRequest = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_REQUEST;
  payload: {
    ladingCode: string;
    cb?: (response: TGetDepotOrdersResponse) => void;
  };
};

export type TGetDepotOrdersSuccess = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_SUCCESS;
  payload: { response: TGetDepotOrdersResponse };
};

export type TGetDepotOrdersFailed = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_FAILED;
  payload: { error: unknown };
};

export type TGetDepotOrdersReturnRequest = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_REQUEST;
  payload: {
    params: TGetDepotOrdersParams;
    cb?: (response: TGetDepotOrdersReturnResponse) => void;
  };
};

export type TGetDepotOrdersReturnSuccess = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SUCCESS;
  payload: { response: TGetDepotOrdersReturnResponse };
};

export type TGetDepotOrdersReturnFailed = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_FAILED;
  payload: { error: unknown };
};

export type TGetDepotOrdersReturnSearchRequest = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SEARCH_REQUEST;
  payload: {
    params: TGetDepotOrdersParams;
    cb?: (response: TGetDepotOrdersReturnResponse) => void;
  };
};

export type TGetDepotOrdersReturnSearchSuccess = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SEARCH_SUCCESS;
  payload: { response: TGetDepotOrdersReturnResponse };
};

export type TGetDepotOrdersReturnSearchFailed = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SEARCH_FAILED;
  payload: { error: unknown };
};

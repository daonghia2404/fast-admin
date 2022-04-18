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

export type TGetDepotOrdersRequest = {
  type: EDepotControllerAction.GET_DEPOT_ORDERS_REQUEST;
  payload: {
    params: TGetDepotOrdersParams;
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
    ladingCode: string;
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

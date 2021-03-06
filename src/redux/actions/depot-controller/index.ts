import { createActionCreator } from 'deox';

import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';
import {
  TGetDepotStoragesRequest,
  TGetDepotStoragesSuccess,
  TGetDepotStoragesFailed,
  TGetDepotOrdersFailed,
  TGetDepotOrdersRequest,
  TGetDepotOrdersSuccess,
  TGetDepotOrdersReturnFailed,
  TGetDepotOrdersReturnRequest,
  TGetDepotOrdersReturnSuccess,
  TGetDepotStoragesSearchFailed,
  TGetDepotStoragesSearchRequest,
  TGetDepotStoragesSearchSuccess,
  TGetDepotOrdersReturnSearchFailed,
  TGetDepotOrdersReturnSearchRequest,
  TGetDepotOrdersReturnSearchSuccess,
} from '@/redux/actions/depot-controller/types';
import {
  TGetDepotOrdersParams,
  TGetDepotOrdersResponse,
  TGetDepotOrdersReturnResponse,
  TGetDepotStoresParams,
  TGetDepotStoresResponse,
} from '@/services/api/depot-controller/types';

export const getDepotStoragesAction = {
  request: createActionCreator(
    EDepotControllerAction.GET_DEPOT_STORAGES_REQUEST,
    (resolve) =>
      (params: TGetDepotStoresParams, cb?: (response: TGetDepotStoresResponse) => void): TGetDepotStoragesRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EDepotControllerAction.GET_DEPOT_STORAGES_SUCCESS,
    (resolve) =>
      (response: TGetDepotStoresResponse): TGetDepotStoragesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDepotControllerAction.GET_DEPOT_STORAGES_FAILED,
    (resolve) =>
      (error: unknown): TGetDepotStoragesFailed =>
        resolve({ error }),
  ),
};

export const getDepotStoragesSearchAction = {
  request: createActionCreator(
    EDepotControllerAction.GET_DEPOT_STORAGES_SEARCH_REQUEST,
    (resolve) =>
      (
        params: TGetDepotStoresParams,
        cb?: (response: TGetDepotStoresResponse) => void,
      ): TGetDepotStoragesSearchRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EDepotControllerAction.GET_DEPOT_STORAGES_SEARCH_SUCCESS,
    (resolve) =>
      (response: TGetDepotStoresResponse): TGetDepotStoragesSearchSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDepotControllerAction.GET_DEPOT_STORAGES_SEARCH_FAILED,
    (resolve) =>
      (error: unknown): TGetDepotStoragesSearchFailed =>
        resolve({ error }),
  ),
};

export const getDepotOrdersAction = {
  request: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_REQUEST,
    (resolve) =>
      (ladingCode: string, cb?: (response: TGetDepotOrdersResponse) => void): TGetDepotOrdersRequest =>
        resolve({ ladingCode, cb }),
  ),
  success: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_SUCCESS,
    (resolve) =>
      (response: TGetDepotOrdersResponse): TGetDepotOrdersSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_FAILED,
    (resolve) =>
      (error: unknown): TGetDepotOrdersFailed =>
        resolve({ error }),
  ),
};

export const getDepotOrdersReturnAction = {
  request: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_REQUEST,
    (resolve) =>
      (
        params: TGetDepotOrdersParams,
        cb?: (response: TGetDepotOrdersReturnResponse) => void,
      ): TGetDepotOrdersReturnRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SUCCESS,
    (resolve) =>
      (response: TGetDepotOrdersReturnResponse): TGetDepotOrdersReturnSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_FAILED,
    (resolve) =>
      (error: unknown): TGetDepotOrdersReturnFailed =>
        resolve({ error }),
  ),
};

export const getDepotOrdersReturnSearchAction = {
  request: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SEARCH_REQUEST,
    (resolve) =>
      (
        params: TGetDepotOrdersParams,
        cb?: (response: TGetDepotOrdersReturnResponse) => void,
      ): TGetDepotOrdersReturnSearchRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SEARCH_SUCCESS,
    (resolve) =>
      (response: TGetDepotOrdersReturnResponse): TGetDepotOrdersReturnSearchSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SEARCH_FAILED,
    (resolve) =>
      (error: unknown): TGetDepotOrdersReturnSearchFailed =>
        resolve({ error }),
  ),
};

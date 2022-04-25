import { createReducer } from 'deox';

import {
  TGetDepotOrdersResponse,
  TGetDepotOrdersReturnResponse,
  TGetDepotStoresResponse,
} from '@/services/api/depot-controller/types';
import {
  getDepotOrdersAction,
  getDepotOrdersReturnAction,
  getDepotOrdersReturnSearchAction,
  getDepotStoragesAction,
  getDepotStoragesSearchAction,
} from '@/redux/actions';

export interface IState {
  depotOrders?: TGetDepotOrdersResponse;
  depotStorages?: TGetDepotStoresResponse;
  depotOrdersReturn?: TGetDepotOrdersReturnResponse;
  depotStoragesSearch?: TGetDepotStoresResponse;
  depotOrdersReturnSearch?: TGetDepotOrdersReturnResponse;
}
const initialState: IState = {
  depotOrders: undefined,
  depotStorages: undefined,
  depotOrdersReturn: undefined,
  depotStoragesSearch: undefined,
  depotOrdersReturnSearch: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getDepotOrdersAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      depotOrders: response,
    };
  }),
  handleAction(getDepotStoragesAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      depotStorages: response,
    };
  }),
  handleAction(getDepotOrdersReturnAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      depotOrdersReturn: response,
    };
  }),
  handleAction(getDepotStoragesSearchAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      depotStoragesSearch: response,
    };
  }),
  handleAction(getDepotOrdersReturnSearchAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      depotOrdersReturnSearch: response,
    };
  }),
]);

export default reducer;

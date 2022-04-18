import { createReducer } from 'deox';

import {
  TGetDepotOrdersResponse,
  TGetDepotOrdersReturnResponse,
  TGetDepotStoresResponse,
} from '@/services/api/depot-controller/types';
import { getDepotOrdersAction, getDepotOrdersReturnAction, getDepotStoragesAction } from '@/redux/actions';

export interface IState {
  depotOrders?: TGetDepotOrdersResponse;
  depotStorages?: TGetDepotStoresResponse;
  depotOrdersReturn: TGetDepotOrdersReturnResponse;
}
const initialState: IState = {
  depotOrders: undefined,
  depotStorages: undefined,
  depotOrdersReturn: undefined,
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
]);

export default reducer;

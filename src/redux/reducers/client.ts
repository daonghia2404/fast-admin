import { createReducer } from 'deox';

import {
  TGetClientResponse,
  TGetClientsResponse,
  TGetClientEmployeeResponse,
} from '@/services/api/client-controller/types';
import { getClientAction, getClientsAction, getClientEmployeeAction } from '@/redux/actions';

export interface IState {
  clientEmployee?: TGetClientEmployeeResponse;
  clients?: TGetClientsResponse;
  client: TGetClientResponse;
}
const initialState: IState = {
  clientEmployee: undefined,
  clients: undefined,
  client: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getClientsAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      clients: response,
    };
  }),
  handleAction(getClientAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      client: response,
    };
  }),
  handleAction(getClientEmployeeAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      clientEmployee: response,
    };
  }),
]);

export default reducer;

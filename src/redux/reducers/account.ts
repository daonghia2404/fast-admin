import { createReducer } from 'deox';

import {
  TGetAccountResponse,
  TGetAccountsResponse,
  TGetAllRolesResponse,
} from '@/services/api/account-controller/types';
import { getAccountAction, getAccountsAction, getAllRolesAction } from '@/redux/actions';

export interface IState {
  roles?: TGetAllRolesResponse;
  accounts?: TGetAccountsResponse;
  account?: TGetAccountResponse;
}
const initialState: IState = {
  roles: undefined,
  accounts: undefined,
  account: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getAccountsAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      accounts: response,
    };
  }),
  handleAction(getAccountAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      account: response,
    };
  }),
  handleAction(getAllRolesAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      roles: response,
    };
  }),
]);

export default reducer;

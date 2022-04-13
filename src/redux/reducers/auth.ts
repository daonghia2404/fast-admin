import { createReducer } from 'deox';

import { TGetUserInfoResponse } from '@/services/api/auth-controller/types';
import { getUserInfoAction } from '@/redux/actions';

export interface IState {
  user?: TGetUserInfoResponse;
}
const initialState: IState = {
  user: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getUserInfoAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      user: response,
    };
  }),
]);

export default reducer;

import { createReducer } from 'deox';

import {
  TGetAboutUsResponse,
  TGetContactResponse,
  TGetHomeContentResponse,
  TGetPolicyResponse,
  TGetRuleResponse,
  TGetServiceResponse,
} from '@/services/api/article-controller/types';
import {
  getAboutUsAction,
  getContactAction,
  getHomeContentAction,
  getPolicyAction,
  getRuleAction,
  getServiceAction,
} from '@/redux/actions';

export interface IState {
  homeContent?: TGetHomeContentResponse;
  service?: TGetServiceResponse;
  policy?: TGetPolicyResponse;
  rule?: TGetRuleResponse;
  contact?: TGetContactResponse;
  aboutUs?: TGetAboutUsResponse;
}
const initialState: IState = {
  homeContent: undefined,
  service: undefined,
  policy: undefined,
  rule: undefined,
  contact: undefined,
  aboutUs: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getHomeContentAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      homeContent: response,
    };
  }),
  handleAction(getServiceAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      service: response,
    };
  }),
  handleAction(getPolicyAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      policy: response,
    };
  }),
  handleAction(getRuleAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      rule: response,
    };
  }),
  handleAction(getContactAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      contact: response,
    };
  }),
  handleAction(getAboutUsAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      aboutUs: response,
    };
  }),
]);

export default reducer;

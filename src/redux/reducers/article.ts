import { createReducer } from 'deox';

import {
  TGetAboutUsResponse,
  TGetArticleCategoryResponse,
  TGetArticleResponse,
  TGetArticlesResponse,
  TGetContactResponse,
  TGetFooterResponse,
  TGetHomeContentResponse,
  TGetMiddleBandResponse,
  TGetPolicyResponse,
  TGetRuleResponse,
  TGetServiceDetailResponse,
  TGetServiceResponse,
} from '@/services/api/article-controller/types';
import {
  getAboutUsAction,
  getArticleAction,
  getArticleCategoryAction,
  getArticlesAction,
  getContactAction,
  getFooterAction,
  getHomeContentAction,
  getMiddleBandAction,
  getPolicyAction,
  getRuleAction,
  getServiceAction,
  getServiceDetailAction,
} from '@/redux/actions';

export interface IState {
  homeContent?: TGetHomeContentResponse;
  service?: TGetServiceResponse;
  serviceDetail?: TGetServiceDetailResponse;
  policy?: TGetPolicyResponse;
  rule?: TGetRuleResponse;
  contact?: TGetContactResponse;
  aboutUs?: TGetAboutUsResponse;
  middleBand?: TGetMiddleBandResponse;
  footer?: TGetFooterResponse;
  articles?: TGetArticlesResponse;
  article?: TGetArticleResponse;
  articleCategory?: TGetArticleCategoryResponse;
}
const initialState: IState = {
  homeContent: undefined,
  service: undefined,
  serviceDetail: undefined,
  policy: undefined,
  rule: undefined,
  contact: undefined,
  aboutUs: undefined,
  middleBand: undefined,
  footer: undefined,

  articles: undefined,
  article: undefined,
  articleCategory: undefined,
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
  handleAction(getServiceDetailAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      serviceDetail: response,
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
  handleAction(getMiddleBandAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      middleBand: response,
    };
  }),
  handleAction(getFooterAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      footer: response,
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
  handleAction(getArticlesAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      articles: response,
    };
  }),
  handleAction(getArticleAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      article: response,
    };
  }),
  handleAction(getArticleCategoryAction.success, (state, { payload }) => {
    const { response } = payload;

    return {
      ...state,
      articleCategory: response,
    };
  }),
]);

export default reducer;

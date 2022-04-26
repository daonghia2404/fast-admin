import { createActionCreator } from 'deox';

import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import {
  TGetHomeContentRequest,
  TGetHomeContentSuccess,
  TGetHomeContentFailed,
  TGetServiceFailed,
  TGetServiceRequest,
  TGetServiceSuccess,
  TGetPolicyFailed,
  TGetPolicyRequest,
  TGetPolicySuccess,
  TGetRuleFailed,
  TGetRuleRequest,
  TGetRuleSuccess,
  TGetContactFailed,
  TGetContactRequest,
  TGetContactSuccess,
  TGetAboutUsFailed,
  TGetAboutUsRequest,
  TGetAboutUsSuccess,
  TGetArticleCategoryFailed,
  TGetArticleCategoryRequest,
  TGetArticleCategorySuccess,
  TCreateUpdateArticleFailed,
  TCreateUpdateArticleRequest,
  TCreateUpdateArticleSuccess,
  TGetArticlesFailed,
  TGetArticlesRequest,
  TGetArticlesSuccess,
  TDeleteArticlesFailed,
  TDeleteArticlesRequest,
  TDeleteArticlesSuccess,
  TGetArticleFailed,
  TGetArticleRequest,
  TGetArticleSuccess,
  TGetMiddleBandFailed,
  TGetMiddleBandRequest,
  TGetMiddleBandSuccess,
  TGetFooterFailed,
  TGetFooterRequest,
  TGetFooterSuccess,
  TGetServiceDetailFailed,
  TGetServiceDetailRequest,
  TGetServiceDetailSuccess,
  TGetHomeIntroFailed,
  TGetHomeIntroRequest,
  TGetHomeIntroSuccess,
} from '@/redux/actions/article-controller/types';
import {
  TCreateUpdateArticleBody,
  TCreateUpdateArticleResponse,
  TDeleteArticlesResponse,
  TGetAboutUsResponse,
  TGetArticleCategoryResponse,
  TGetArticleResponse,
  TGetArticlesParams,
  TGetArticlesResponse,
  TGetContactResponse,
  TGetFooterResponse,
  TGetHomeContentResponse,
  TGetHomeIntroResponse,
  TGetMiddleBandResponse,
  TGetPolicyResponse,
  TGetRuleResponse,
  TGetServiceDetailResponse,
  TGetServiceResponse,
} from '@/services/api/article-controller/types';

export const getHomeContentAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_HOME_CONTENT_REQUEST,
    (resolve) =>
      (cb?: (response: TGetHomeContentResponse) => void): TGetHomeContentRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_HOME_CONTENT_SUCCESS,
    (resolve) =>
      (response: TGetHomeContentResponse): TGetHomeContentSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_HOME_CONTENT_FAILED,
    (resolve) =>
      (error: unknown): TGetHomeContentFailed =>
        resolve({ error }),
  ),
};

export const getServiceAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_SERVICE_REQUEST,
    (resolve) =>
      (cb?: (response: TGetServiceResponse) => void): TGetServiceRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_SERVICE_SUCCESS,
    (resolve) =>
      (response: TGetServiceResponse): TGetServiceSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_SERVICE_FAILED,
    (resolve) =>
      (error: unknown): TGetServiceFailed =>
        resolve({ error }),
  ),
};

export const getServiceDetailAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_SERVICE_DETAIL_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetServiceDetailResponse) => void): TGetServiceDetailRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_SERVICE_DETAIL_SUCCESS,
    (resolve) =>
      (response: TGetServiceDetailResponse): TGetServiceDetailSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_SERVICE_DETAIL_FAILED,
    (resolve) =>
      (error: unknown): TGetServiceDetailFailed =>
        resolve({ error }),
  ),
};

export const getMiddleBandAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_MIDDLE_BAND_REQUEST,
    (resolve) =>
      (cb?: (response: TGetMiddleBandResponse) => void): TGetMiddleBandRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_MIDDLE_BAND_SUCCESS,
    (resolve) =>
      (response: TGetMiddleBandResponse): TGetMiddleBandSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_MIDDLE_BAND_FAILED,
    (resolve) =>
      (error: unknown): TGetMiddleBandFailed =>
        resolve({ error }),
  ),
};

export const getFooterAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_FOOTER_REQUEST,
    (resolve) =>
      (cb?: (response: TGetFooterResponse) => void): TGetFooterRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_FOOTER_SUCCESS,
    (resolve) =>
      (response: TGetFooterResponse): TGetFooterSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_FOOTER_FAILED,
    (resolve) =>
      (error: unknown): TGetFooterFailed =>
        resolve({ error }),
  ),
};

export const getPolicyAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_POLICY_REQUEST,
    (resolve) =>
      (cb?: (response: TGetPolicyResponse) => void): TGetPolicyRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_POLICY_SUCCESS,
    (resolve) =>
      (response: TGetPolicyResponse): TGetPolicySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_POLICY_FAILED,
    (resolve) =>
      (error: unknown): TGetPolicyFailed =>
        resolve({ error }),
  ),
};

export const getRuleAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_RULE_REQUEST,
    (resolve) =>
      (cb?: (response: TGetRuleResponse) => void): TGetRuleRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_RULE_SUCCESS,
    (resolve) =>
      (response: TGetRuleResponse): TGetRuleSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_RULE_FAILED,
    (resolve) =>
      (error: unknown): TGetRuleFailed =>
        resolve({ error }),
  ),
};

export const getHomeIntroAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_HOME_INTRO_REQUEST,
    (resolve) =>
      (cb?: (response: TGetHomeIntroResponse) => void): TGetHomeIntroRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_HOME_INTRO_SUCCESS,
    (resolve) =>
      (response: TGetHomeIntroResponse): TGetHomeIntroSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_HOME_INTRO_FAILED,
    (resolve) =>
      (error: unknown): TGetHomeIntroFailed =>
        resolve({ error }),
  ),
};

export const getContactAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_CONTACT_REQUEST,
    (resolve) =>
      (cb?: (response: TGetContactResponse) => void): TGetContactRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_CONTACT_SUCCESS,
    (resolve) =>
      (response: TGetContactResponse): TGetContactSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_CONTACT_FAILED,
    (resolve) =>
      (error: unknown): TGetContactFailed =>
        resolve({ error }),
  ),
};

export const getAboutUsAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_ABOUT_US_REQUEST,
    (resolve) =>
      (cb?: (response: TGetAboutUsResponse) => void): TGetAboutUsRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_ABOUT_US_SUCCESS,
    (resolve) =>
      (response: TGetAboutUsResponse): TGetAboutUsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_ABOUT_US_FAILED,
    (resolve) =>
      (error: unknown): TGetAboutUsFailed =>
        resolve({ error }),
  ),
};

export const getArticleCategoryAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_ARTICLE_CATEGORY_REQUEST,
    (resolve) =>
      (cb?: (response: TGetArticleCategoryResponse) => void): TGetArticleCategoryRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_ARTICLE_CATEGORY_SUCCESS,
    (resolve) =>
      (response: TGetArticleCategoryResponse): TGetArticleCategorySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_ARTICLE_CATEGORY_FAILED,
    (resolve) =>
      (error: unknown): TGetArticleCategoryFailed =>
        resolve({ error }),
  ),
};

export const createUpdateArticleAction = {
  request: createActionCreator(
    EArticleControllerAction.CREATE_UPDATE_ARTICLE_REQUEST,
    (resolve) =>
      (
        body: TCreateUpdateArticleBody,
        cb?: (response: TCreateUpdateArticleResponse) => void,
      ): TCreateUpdateArticleRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.CREATE_UPDATE_ARTICLE_SUCCESS,
    (resolve) =>
      (response: TCreateUpdateArticleResponse): TCreateUpdateArticleSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.CREATE_UPDATE_ARTICLE_FAILED,
    (resolve) =>
      (error: unknown): TCreateUpdateArticleFailed =>
        resolve({ error }),
  ),
};

export const getArticlesAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_ARTICLES_REQUEST,
    (resolve) =>
      (params: TGetArticlesParams, cb?: (response: TGetArticlesResponse) => void): TGetArticlesRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_ARTICLES_SUCCESS,
    (resolve) =>
      (response: TGetArticlesResponse): TGetArticlesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_ARTICLES_FAILED,
    (resolve) =>
      (error: unknown): TGetArticlesFailed =>
        resolve({ error }),
  ),
};
export const getArticleAction = {
  request: createActionCreator(
    EArticleControllerAction.GET_ARTICLE_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetArticleResponse) => void): TGetArticleRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.GET_ARTICLE_SUCCESS,
    (resolve) =>
      (response: TGetArticleResponse): TGetArticleSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.GET_ARTICLE_FAILED,
    (resolve) =>
      (error: unknown): TGetArticleFailed =>
        resolve({ error }),
  ),
};

export const deleteArticlesAction = {
  request: createActionCreator(
    EArticleControllerAction.DELETE_ARTICLES_REQUEST,
    (resolve) =>
      (ids: string, cb?: (response: TDeleteArticlesResponse) => void): TDeleteArticlesRequest =>
        resolve({ ids, cb }),
  ),
  success: createActionCreator(
    EArticleControllerAction.DELETE_ARTICLES_SUCCESS,
    (resolve) =>
      (response: TDeleteArticlesResponse): TDeleteArticlesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EArticleControllerAction.DELETE_ARTICLES_FAILED,
    (resolve) =>
      (error: unknown): TDeleteArticlesFailed =>
        resolve({ error }),
  ),
};

import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
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
  TGetHomeContentResponse,
  TGetPolicyResponse,
  TGetRuleResponse,
  TGetServiceResponse,
} from '@/services/api/article-controller/types';

export type TGetHomeContentRequest = {
  type: EArticleControllerAction.GET_HOME_CONTENT_REQUEST;
  payload: {
    cb?: (response: TGetHomeContentResponse) => void;
  };
};

export type TGetHomeContentSuccess = {
  type: EArticleControllerAction.GET_HOME_CONTENT_SUCCESS;
  payload: { response: TGetHomeContentResponse };
};

export type TGetHomeContentFailed = {
  type: EArticleControllerAction.GET_HOME_CONTENT_FAILED;
  payload: { error: unknown };
};

export type TGetServiceRequest = {
  type: EArticleControllerAction.GET_SERVICE_REQUEST;
  payload: {
    cb?: (response: TGetServiceResponse) => void;
  };
};

export type TGetServiceSuccess = {
  type: EArticleControllerAction.GET_SERVICE_SUCCESS;
  payload: { response: TGetServiceResponse };
};

export type TGetServiceFailed = {
  type: EArticleControllerAction.GET_SERVICE_FAILED;
  payload: { error: unknown };
};

export type TGetPolicyRequest = {
  type: EArticleControllerAction.GET_POLICY_REQUEST;
  payload: {
    cb?: (response: TGetPolicyResponse) => void;
  };
};

export type TGetPolicySuccess = {
  type: EArticleControllerAction.GET_POLICY_SUCCESS;
  payload: { response: TGetPolicyResponse };
};

export type TGetPolicyFailed = {
  type: EArticleControllerAction.GET_POLICY_FAILED;
  payload: { error: unknown };
};

export type TGetRuleRequest = {
  type: EArticleControllerAction.GET_RULE_REQUEST;
  payload: {
    cb?: (response: TGetRuleResponse) => void;
  };
};

export type TGetRuleSuccess = {
  type: EArticleControllerAction.GET_RULE_SUCCESS;
  payload: { response: TGetRuleResponse };
};

export type TGetRuleFailed = {
  type: EArticleControllerAction.GET_RULE_FAILED;
  payload: { error: unknown };
};

export type TGetContactRequest = {
  type: EArticleControllerAction.GET_CONTACT_REQUEST;
  payload: {
    cb?: (response: TGetContactResponse) => void;
  };
};

export type TGetContactSuccess = {
  type: EArticleControllerAction.GET_CONTACT_SUCCESS;
  payload: { response: TGetContactResponse };
};

export type TGetContactFailed = {
  type: EArticleControllerAction.GET_CONTACT_FAILED;
  payload: { error: unknown };
};

export type TGetAboutUsRequest = {
  type: EArticleControllerAction.GET_ABOUT_US_REQUEST;
  payload: {
    cb?: (response: TGetAboutUsResponse) => void;
  };
};

export type TGetAboutUsSuccess = {
  type: EArticleControllerAction.GET_ABOUT_US_SUCCESS;
  payload: { response: TGetAboutUsResponse };
};

export type TGetAboutUsFailed = {
  type: EArticleControllerAction.GET_ABOUT_US_FAILED;
  payload: { error: unknown };
};

export type TGetArticleCategoryRequest = {
  type: EArticleControllerAction.GET_ARTICLE_CATEGORY_REQUEST;
  payload: {
    cb?: (response: TGetArticleCategoryResponse) => void;
  };
};

export type TGetArticleCategorySuccess = {
  type: EArticleControllerAction.GET_ARTICLE_CATEGORY_SUCCESS;
  payload: { response: TGetArticleCategoryResponse };
};

export type TGetArticleCategoryFailed = {
  type: EArticleControllerAction.GET_ARTICLE_CATEGORY_FAILED;
  payload: { error: unknown };
};

export type TCreateUpdateArticleRequest = {
  type: EArticleControllerAction.CREATE_UPDATE_ARTICLE_REQUEST;
  payload: {
    body: TCreateUpdateArticleBody;
    cb?: (response: TCreateUpdateArticleResponse) => void;
  };
};

export type TCreateUpdateArticleSuccess = {
  type: EArticleControllerAction.CREATE_UPDATE_ARTICLE_SUCCESS;
  payload: { response: TCreateUpdateArticleResponse };
};

export type TCreateUpdateArticleFailed = {
  type: EArticleControllerAction.CREATE_UPDATE_ARTICLE_FAILED;
  payload: { error: unknown };
};

export type TGetArticlesRequest = {
  type: EArticleControllerAction.GET_ARTICLES_REQUEST;
  payload: {
    params: TGetArticlesParams;
    cb?: (response: TGetArticlesResponse) => void;
  };
};

export type TGetArticlesSuccess = {
  type: EArticleControllerAction.GET_ARTICLES_SUCCESS;
  payload: { response: TGetArticlesResponse };
};

export type TGetArticlesFailed = {
  type: EArticleControllerAction.GET_ARTICLES_FAILED;
  payload: { error: unknown };
};

export type TGetArticleRequest = {
  type: EArticleControllerAction.GET_ARTICLE_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetArticleResponse) => void;
  };
};

export type TGetArticleSuccess = {
  type: EArticleControllerAction.GET_ARTICLE_SUCCESS;
  payload: { response: TGetArticleResponse };
};

export type TGetArticleFailed = {
  type: EArticleControllerAction.GET_ARTICLE_FAILED;
  payload: { error: unknown };
};

export type TDeleteArticlesRequest = {
  type: EArticleControllerAction.DELETE_ARTICLES_REQUEST;
  payload: {
    ids: string;
    cb?: (response: TDeleteArticlesResponse) => void;
  };
};

export type TDeleteArticlesSuccess = {
  type: EArticleControllerAction.DELETE_ARTICLES_SUCCESS;
  payload: { response: TDeleteArticlesResponse };
};

export type TDeleteArticlesFailed = {
  type: EArticleControllerAction.DELETE_ARTICLES_FAILED;
  payload: { error: unknown };
};

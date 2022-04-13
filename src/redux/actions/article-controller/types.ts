import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import {
  TGetAboutUsResponse,
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

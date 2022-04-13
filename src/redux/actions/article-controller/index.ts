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
} from '@/redux/actions/article-controller/types';
import {
  TGetAboutUsResponse,
  TGetContactResponse,
  TGetHomeContentResponse,
  TGetPolicyResponse,
  TGetRuleResponse,
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

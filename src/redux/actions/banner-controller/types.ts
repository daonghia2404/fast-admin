import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import {
  TCreateUpdateBannerResponse,
  TCreateUpdateBannersBody,
  TDeleteBannerParams,
  TDeleteBannerResponse,
  TGetBannerResponse,
  TGetBannersBody,
  TGetBannersResponse,
  TGetBannerCategoryResponse,
  TGetHomeBannerResponse,
  TGetLogoResponse,
} from '@/services/api/banner-controller/types';

export type TGetBannersRequest = {
  type: EBannerControllerAction.GET_BANNERS_REQUEST;
  payload: {
    body: TGetBannersBody;
    cb?: (response: TGetBannersResponse) => void;
  };
};

export type TGetBannersSuccess = {
  type: EBannerControllerAction.GET_BANNERS_SUCCESS;
  payload: { response: TGetBannersResponse };
};

export type TGetBannersFailed = { type: EBannerControllerAction.GET_BANNERS_FAILED; payload: { error: unknown } };

export type TGetBannerRequest = {
  type: EBannerControllerAction.GET_BANNER_REQUEST;
  payload: {
    cb?: (response: TGetBannerResponse) => void;
  };
};

export type TGetBannerSuccess = {
  type: EBannerControllerAction.GET_BANNER_SUCCESS;
  payload: { response: TGetBannerResponse };
};

export type TGetBannerFailed = { type: EBannerControllerAction.GET_BANNER_FAILED; payload: { error: unknown } };

export type TGetLogoRequest = {
  type: EBannerControllerAction.GET_LOGO_REQUEST;
  payload: {
    cb?: (response: TGetLogoResponse) => void;
  };
};

export type TGetLogoSuccess = {
  type: EBannerControllerAction.GET_LOGO_SUCCESS;
  payload: { response: TGetLogoResponse };
};

export type TGetLogoFailed = { type: EBannerControllerAction.GET_LOGO_FAILED; payload: { error: unknown } };

export type TGetHomeBannerRequest = {
  type: EBannerControllerAction.GET_HOME_BANNER_REQUEST;
  payload: {
    cb?: (response: TGetHomeBannerResponse) => void;
  };
};

export type TGetHomeBannerSuccess = {
  type: EBannerControllerAction.GET_HOME_BANNER_SUCCESS;
  payload: { response: TGetHomeBannerResponse };
};

export type TGetHomeBannerFailed = {
  type: EBannerControllerAction.GET_HOME_BANNER_FAILED;
  payload: { error: unknown };
};

export type TGetBannerCategoryRequest = {
  type: EBannerControllerAction.GET_BANNER_CATEGORY_REQUEST;
  payload: {
    cb?: (response: TGetBannerCategoryResponse) => void;
  };
};

export type TGetBannerCategorySuccess = {
  type: EBannerControllerAction.GET_BANNER_CATEGORY_SUCCESS;
  payload: { response: TGetBannerCategoryResponse };
};

export type TGetBannerCategoryFailed = {
  type: EBannerControllerAction.GET_BANNER_CATEGORY_FAILED;
  payload: { error: unknown };
};

export type TCreateUpdateBannerRequest = {
  type: EBannerControllerAction.CREATE_UPDATE_BANNER_REQUEST;
  payload: {
    body: TCreateUpdateBannersBody;
    cb?: (response: TCreateUpdateBannerResponse) => void;
  };
};

export type TCreateUpdateBannerSuccess = {
  type: EBannerControllerAction.CREATE_UPDATE_BANNER_SUCCESS;
  payload: { response: TCreateUpdateBannerResponse };
};

export type TCreateUpdateBannerFailed = {
  type: EBannerControllerAction.CREATE_UPDATE_BANNER_FAILED;
  payload: { error: unknown };
};

export type TDeleteBannerRequest = {
  type: EBannerControllerAction.DELETE_BANNER_REQUEST;
  payload: {
    params: TDeleteBannerParams;
    cb?: (response: TDeleteBannerResponse) => void;
  };
};

export type TDeleteBannerSuccess = {
  type: EBannerControllerAction.DELETE_BANNER_SUCCESS;
  payload: { response: TDeleteBannerResponse };
};

export type TDeleteBannerFailed = {
  type: EBannerControllerAction.DELETE_BANNER_FAILED;
  payload: { error: unknown };
};

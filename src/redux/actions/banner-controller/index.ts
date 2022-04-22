import { createActionCreator } from 'deox';

import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import {
  TGetBannersRequest,
  TGetBannersSuccess,
  TGetBannersFailed,
  TGetBannerFailed,
  TGetBannerRequest,
  TGetBannerSuccess,
  TGetBannerCategoryFailed,
  TGetBannerCategoryRequest,
  TGetBannerCategorySuccess,
  TCreateUpdateBannerFailed,
  TCreateUpdateBannerRequest,
  TCreateUpdateBannerSuccess,
  TDeleteBannerFailed,
  TDeleteBannerRequest,
  TDeleteBannerSuccess,
  TGetHomeBannerFailed,
  TGetHomeBannerRequest,
  TGetHomeBannerSuccess,
  TGetLogoFailed,
  TGetLogoRequest,
  TGetLogoSuccess,
} from '@/redux/actions/banner-controller/types';
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

export const getBannersAction = {
  request: createActionCreator(
    EBannerControllerAction.GET_BANNERS_REQUEST,
    (resolve) =>
      (body: TGetBannersBody, cb?: (response: TGetBannersResponse) => void): TGetBannersRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.GET_BANNERS_SUCCESS,
    (resolve) =>
      (response: TGetBannersResponse): TGetBannersSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.GET_BANNERS_FAILED,
    (resolve) =>
      (error: unknown): TGetBannersFailed =>
        resolve({ error }),
  ),
};

export const getBannerAction = {
  request: createActionCreator(
    EBannerControllerAction.GET_BANNER_REQUEST,
    (resolve) =>
      (cb?: (response: TGetBannerResponse) => void): TGetBannerRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.GET_BANNER_SUCCESS,
    (resolve) =>
      (response: TGetBannerResponse): TGetBannerSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.GET_BANNER_FAILED,
    (resolve) =>
      (error: unknown): TGetBannerFailed =>
        resolve({ error }),
  ),
};

export const getLogoAction = {
  request: createActionCreator(
    EBannerControllerAction.GET_LOGO_REQUEST,
    (resolve) =>
      (cb?: (response: TGetLogoResponse) => void): TGetLogoRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.GET_LOGO_SUCCESS,
    (resolve) =>
      (response: TGetLogoResponse): TGetLogoSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.GET_LOGO_FAILED,
    (resolve) =>
      (error: unknown): TGetLogoFailed =>
        resolve({ error }),
  ),
};

export const getHomeBannerAction = {
  request: createActionCreator(
    EBannerControllerAction.GET_HOME_BANNER_REQUEST,
    (resolve) =>
      (cb?: (response: TGetHomeBannerResponse) => void): TGetHomeBannerRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.GET_HOME_BANNER_SUCCESS,
    (resolve) =>
      (response: TGetHomeBannerResponse): TGetHomeBannerSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.GET_HOME_BANNER_FAILED,
    (resolve) =>
      (error: unknown): TGetHomeBannerFailed =>
        resolve({ error }),
  ),
};

export const getBannerCategoryAction = {
  request: createActionCreator(
    EBannerControllerAction.GET_BANNER_CATEGORY_REQUEST,
    (resolve) =>
      (cb?: (response: TGetBannerCategoryResponse) => void): TGetBannerCategoryRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.GET_BANNER_CATEGORY_SUCCESS,
    (resolve) =>
      (response: TGetBannerCategoryResponse): TGetBannerCategorySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.GET_BANNER_CATEGORY_FAILED,
    (resolve) =>
      (error: unknown): TGetBannerCategoryFailed =>
        resolve({ error }),
  ),
};

export const createUpdateBannerAction = {
  request: createActionCreator(
    EBannerControllerAction.CREATE_UPDATE_BANNER_REQUEST,
    (resolve) =>
      (
        body: TCreateUpdateBannersBody,
        cb?: (response: TCreateUpdateBannerResponse) => void,
      ): TCreateUpdateBannerRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.CREATE_UPDATE_BANNER_SUCCESS,
    (resolve) =>
      (response: TCreateUpdateBannerResponse): TCreateUpdateBannerSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.CREATE_UPDATE_BANNER_FAILED,
    (resolve) =>
      (error: unknown): TCreateUpdateBannerFailed =>
        resolve({ error }),
  ),
};

export const deleteBannerAction = {
  request: createActionCreator(
    EBannerControllerAction.DELETE_BANNER_REQUEST,
    (resolve) =>
      (params: TDeleteBannerParams, cb?: (response: TDeleteBannerResponse) => void): TDeleteBannerRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.DELETE_BANNER_SUCCESS,
    (resolve) =>
      (response: TDeleteBannerResponse): TDeleteBannerSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.DELETE_BANNER_FAILED,
    (resolve) =>
      (error: unknown): TDeleteBannerFailed =>
        resolve({ error }),
  ),
};

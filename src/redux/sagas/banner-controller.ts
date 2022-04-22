import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import ControllerInstance from '@/services/api/banner-controller';
import {
  TCreateUpdateBannerResponse,
  TDeleteBannerResponse,
  TGetBannerResponse,
  TGetBannersResponse,
  TGetBannerCategoryResponse,
  TGetHomeBannerResponse,
  TGetLogoResponse,
} from '@/services/api/banner-controller/types';
import {
  createUpdateBannerAction,
  deleteBannerAction,
  getBannerAction,
  getBannersAction,
  getBannerCategoryAction,
  getHomeBannerAction,
  getLogoAction,
} from '@/redux/actions';

export function* getBannersSaga(action: ActionType<typeof getBannersAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getBanners, body)) as TGetBannersResponse;

    yield put(getBannersAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getBannersAction.failure(err));
  }
}

export function* getBannerSaga(action: ActionType<typeof getBannerAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getBanner)) as TGetBannerResponse;

    yield put(getBannerAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getBannerAction.failure(err));
  }
}

export function* getHomeBannerSaga(action: ActionType<typeof getHomeBannerAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getHomeBanner)) as TGetHomeBannerResponse;

    yield put(getHomeBannerAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getHomeBannerAction.failure(err));
  }
}

export function* getBannerCategorySaga(action: ActionType<typeof getBannerCategoryAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getBannerCategory)) as TGetBannerCategoryResponse;

    yield put(getBannerCategoryAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getBannerCategoryAction.failure(err));
  }
}

export function* getLogoSaga(action: ActionType<typeof getLogoAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getLogo)) as TGetLogoResponse;

    yield put(getLogoAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getLogoAction.failure(err));
  }
}

export function* createUpdateBannerSaga(action: ActionType<typeof createUpdateBannerAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.createUpdateBanner, body)) as TCreateUpdateBannerResponse;

    yield put(createUpdateBannerAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(createUpdateBannerAction.failure(err));
  }
}

export function* deleteBannerSaga(action: ActionType<typeof deleteBannerAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.deleteBanner, params)) as TDeleteBannerResponse;

    yield put(deleteBannerAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(deleteBannerAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getBannersAction.request.type, getBannersSaga)]);
  yield all([takeLatest(getBannerAction.request.type, getBannerSaga)]);
  yield all([takeLatest(getLogoAction.request.type, getLogoSaga)]);
  yield all([takeLatest(getHomeBannerAction.request.type, getHomeBannerSaga)]);
  yield all([takeLatest(getBannerCategoryAction.request.type, getBannerCategorySaga)]);
  yield all([takeLatest(createUpdateBannerAction.request.type, createUpdateBannerSaga)]);
  yield all([takeLatest(deleteBannerAction.request.type, deleteBannerSaga)]);
}

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import ControllerInstance from '@/services/api/article-controller';
import {
  createUpdateArticleAction,
  deleteArticlesAction,
  getAboutUsAction,
  getArticleAction,
  getArticleCategoryAction,
  getArticlesAction,
  getContactAction,
  getFooterAction,
  getHomeContentAction,
  getHomeIntroAction,
  getMiddleBandAction,
  getPolicyAction,
  getRuleAction,
  getServiceAction,
  getServiceDetailAction,
} from '@/redux/actions';
import {
  TCreateUpdateArticleResponse,
  TDeleteArticlesResponse,
  TGetAboutUsResponse,
  TGetArticleCategoryResponse,
  TGetArticleResponse,
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

export function* getHomeContentSaga(action: ActionType<typeof getHomeContentAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getHomeContent)) as TGetHomeContentResponse;

    yield put(getHomeContentAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getHomeContentAction.failure(err));
  }
}
export function* getHomeIntroSaga(action: ActionType<typeof getHomeIntroAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getHomeIntro)) as TGetHomeIntroResponse;

    yield put(getHomeIntroAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getHomeIntroAction.failure(err));
  }
}

export function* getServiceSaga(action: ActionType<typeof getServiceAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getService)) as TGetServiceResponse;

    yield put(getServiceAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getServiceAction.failure(err));
  }
}
export function* getServiceDetailSaga(action: ActionType<typeof getServiceDetailAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getServiceDetail, id)) as TGetServiceDetailResponse;

    yield put(getServiceDetailAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getServiceDetailAction.failure(err));
  }
}
export function* getMiddleBandSaga(action: ActionType<typeof getMiddleBandAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getMiddleBand)) as TGetMiddleBandResponse;

    yield put(getMiddleBandAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getMiddleBandAction.failure(err));
  }
}
export function* getFooterSaga(action: ActionType<typeof getFooterAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getFooter)) as TGetFooterResponse;

    yield put(getFooterAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getFooterAction.failure(err));
  }
}

export function* getPolicySaga(action: ActionType<typeof getPolicyAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getPolicy)) as TGetPolicyResponse;

    yield put(getPolicyAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPolicyAction.failure(err));
  }
}

export function* getRuleSaga(action: ActionType<typeof getRuleAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getRule)) as TGetRuleResponse;

    yield put(getRuleAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getRuleAction.failure(err));
  }
}
export function* getContactSaga(action: ActionType<typeof getContactAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getContact)) as TGetContactResponse;

    yield put(getContactAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getContactAction.failure(err));
  }
}
export function* getAboutUsSaga(action: ActionType<typeof getAboutUsAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getAboutUs)) as TGetAboutUsResponse;

    yield put(getAboutUsAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getAboutUsAction.failure(err));
  }
}
export function* getArticlesSaga(action: ActionType<typeof getArticlesAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getArticles, params)) as TGetArticlesResponse;

    yield put(getArticlesAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getArticlesAction.failure(err));
  }
}
export function* getArticleSaga(action: ActionType<typeof getArticleAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getArticle, id)) as TGetArticleResponse;

    yield put(getArticleAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getArticleAction.failure(err));
  }
}
export function* getArticleCategorySaga(action: ActionType<typeof getArticleCategoryAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getArticleCategory)) as TGetArticleCategoryResponse;

    yield put(getArticleCategoryAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getArticleCategoryAction.failure(err));
  }
}
export function* createUpdateArticleSaga(action: ActionType<typeof createUpdateArticleAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.createUpdateArticle, body)) as TCreateUpdateArticleResponse;

    yield put(createUpdateArticleAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(createUpdateArticleAction.failure(err));
  }
}
export function* deleteArticlesSaga(action: ActionType<typeof deleteArticlesAction.request>): Generator {
  const { ids, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.deleteArticles, ids)) as TDeleteArticlesResponse;

    yield put(deleteArticlesAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(deleteArticlesAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getHomeContentAction.request.type, getHomeContentSaga)]);
  yield all([takeLatest(getHomeIntroAction.request.type, getHomeIntroSaga)]);
  yield all([takeLatest(getServiceAction.request.type, getServiceSaga)]);
  yield all([takeLatest(getServiceDetailAction.request.type, getServiceDetailSaga)]);
  yield all([takeLatest(getPolicyAction.request.type, getPolicySaga)]);
  yield all([takeLatest(getRuleAction.request.type, getRuleSaga)]);
  yield all([takeLatest(getContactAction.request.type, getContactSaga)]);
  yield all([takeLatest(getAboutUsAction.request.type, getAboutUsSaga)]);
  yield all([takeLatest(getArticlesAction.request.type, getArticlesSaga)]);
  yield all([takeLatest(getArticleAction.request.type, getArticleSaga)]);
  yield all([takeLatest(getMiddleBandAction.request.type, getMiddleBandSaga)]);
  yield all([takeLatest(getFooterAction.request.type, getFooterSaga)]);
  yield all([takeLatest(createUpdateArticleAction.request.type, createUpdateArticleSaga)]);
  yield all([takeLatest(deleteArticlesAction.request.type, deleteArticlesSaga)]);
  yield all([takeLatest(getArticleCategoryAction.request.type, getArticleCategorySaga)]);
}

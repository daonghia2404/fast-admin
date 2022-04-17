import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import ControllerInstance from '@/services/api/article-controller';
import {
  createUpdateArticleAction,
  deleteArticlesAction,
  getAboutUsAction,
  getArticleCategoryAction,
  getArticlesAction,
  getContactAction,
  getHomeContentAction,
  getPolicyAction,
  getRuleAction,
  getServiceAction,
} from '@/redux/actions';
import {
  TCreateUpdateArticleResponse,
  TDeleteArticlesResponse,
  TGetAboutUsResponse,
  TGetArticleCategoryResponse,
  TGetArticlesResponse,
  TGetContactResponse,
  TGetHomeContentResponse,
  TGetPolicyResponse,
  TGetRuleResponse,
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
  yield all([takeLatest(getServiceAction.request.type, getServiceSaga)]);
  yield all([takeLatest(getPolicyAction.request.type, getPolicySaga)]);
  yield all([takeLatest(getRuleAction.request.type, getRuleSaga)]);
  yield all([takeLatest(getContactAction.request.type, getContactSaga)]);
  yield all([takeLatest(getAboutUsAction.request.type, getAboutUsSaga)]);
  yield all([takeLatest(getArticlesAction.request.type, getArticlesSaga)]);
  yield all([takeLatest(createUpdateArticleAction.request.type, createUpdateArticleSaga)]);
  yield all([takeLatest(deleteArticlesAction.request.type, deleteArticlesSaga)]);
  yield all([takeLatest(getArticleCategoryAction.request.type, getArticleCategorySaga)]);
}

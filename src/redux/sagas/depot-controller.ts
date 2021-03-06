import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import ControllerInstance from '@/services/api/depot-controller';
import {
  getDepotStoragesAction,
  getDepotOrdersAction,
  getDepotOrdersReturnAction,
  getDepotOrdersReturnSearchAction,
  getDepotStoragesSearchAction,
} from '@/redux/actions';
import {
  TGetDepotStoresResponse,
  TGetDepotOrdersResponse,
  TGetDepotOrdersReturnResponse,
} from '@/services/api/depot-controller/types';

export function* getDepotStoragesSaga(action: ActionType<typeof getDepotStoragesAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getDepotStores, params)) as TGetDepotStoresResponse;

    yield put(getDepotStoragesAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getDepotStoragesAction.failure(err));
  }
}

export function* getDepotStoragesSearchSaga(
  action: ActionType<typeof getDepotStoragesSearchAction.request>,
): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getDepotStores, params)) as TGetDepotStoresResponse;

    yield put(getDepotStoragesSearchAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getDepotStoragesSearchAction.failure(err));
  }
}

export function* getDepotOrdersSaga(action: ActionType<typeof getDepotOrdersAction.request>): Generator {
  const { ladingCode, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getDepotOrders, ladingCode)) as TGetDepotOrdersResponse;

    yield put(getDepotOrdersAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getDepotOrdersAction.failure(err));
  }
}

export function* getDepotOrdersReturnSaga(action: ActionType<typeof getDepotOrdersReturnAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getDepotOrdersReturn, params)) as TGetDepotOrdersReturnResponse;

    yield put(getDepotOrdersReturnAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getDepotOrdersReturnAction.failure(err));
  }
}

export function* getDepotOrdersReturnSearchSaga(
  action: ActionType<typeof getDepotOrdersReturnSearchAction.request>,
): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getDepotOrdersReturn, params)) as TGetDepotOrdersReturnResponse;

    yield put(getDepotOrdersReturnSearchAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getDepotOrdersReturnSearchAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getDepotOrdersAction.request.type, getDepotOrdersSaga)]);
  yield all([takeLatest(getDepotStoragesAction.request.type, getDepotStoragesSaga)]);
  yield all([takeLatest(getDepotStoragesSearchAction.request.type, getDepotStoragesSearchSaga)]);
  yield all([takeLatest(getDepotOrdersReturnAction.request.type, getDepotOrdersReturnSaga)]);
  yield all([takeLatest(getDepotOrdersReturnSearchAction.request.type, getDepotOrdersReturnSearchSaga)]);
}

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import ControllerInstance from '@/services/api/client-controller';
import {
  TCreateUpdateClientResponse,
  TDeleteClientResponse,
  TGetClientResponse,
  TGetClientsResponse,
  TGetClientEmployeeResponse,
} from '@/services/api/client-controller/types';
import {
  createUpdateClientAction,
  deleteClientAction,
  getClientAction,
  getClientsAction,
  getClientEmployeeAction,
} from '@/redux/actions';

export function* getClientsSaga(action: ActionType<typeof getClientsAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getClients, body)) as TGetClientsResponse;

    yield put(getClientsAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getClientsAction.failure(err));
  }
}

export function* getClientSaga(action: ActionType<typeof getClientAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getClient, params)) as TGetClientResponse;

    yield put(getClientAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getClientAction.failure(err));
  }
}

export function* getClientEmployeeSaga(action: ActionType<typeof getClientEmployeeAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getClientEmployee)) as TGetClientEmployeeResponse;

    yield put(getClientEmployeeAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getClientEmployeeAction.failure(err));
  }
}

export function* createUpdateClientSaga(action: ActionType<typeof createUpdateClientAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.createUpdateClient, body)) as TCreateUpdateClientResponse;

    yield put(createUpdateClientAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(createUpdateClientAction.failure(err));
  }
}

export function* deleteClientSaga(action: ActionType<typeof deleteClientAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.deleteClient, params)) as TDeleteClientResponse;

    yield put(deleteClientAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(deleteClientAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getClientsAction.request.type, getClientsSaga)]);
  yield all([takeLatest(getClientAction.request.type, getClientSaga)]);
  yield all([takeLatest(getClientEmployeeAction.request.type, getClientEmployeeSaga)]);
  yield all([takeLatest(createUpdateClientAction.request.type, createUpdateClientSaga)]);
  yield all([takeLatest(deleteClientAction.request.type, deleteClientSaga)]);
}

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import authHelpers from '@/services/helpers';
import ControllerInstance from '@/services/api/account-controller';
import {
  TChangePasswordAccountResponse,
  TCreateUpdateAccountResponse,
  TDeleteAccountResponse,
  TGetAccountResponse,
  TGetAccountsResponse,
  TGetAllRolesResponse,
} from '@/services/api/account-controller/types';
import {
  changePasswordAccountAction,
  createUpdateAccountAction,
  deleteAccountAction,
  getAccountAction,
  getAccountsAction,
  getAllRolesAction,
} from '@/redux/actions';

export function* getAccountsSaga(action: ActionType<typeof getAccountsAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getAccounts, body)) as TGetAccountsResponse;

    yield put(getAccountsAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getAccountsAction.failure(err));
  }
}

export function* getAccountSaga(action: ActionType<typeof getAccountAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getAccount, params)) as TGetAccountResponse;

    yield put(getAccountAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getAccountAction.failure(err));
  }
}

export function* getAllRolesSaga(action: ActionType<typeof getAllRolesAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.getAllRoles)) as TGetAllRolesResponse;

    yield put(getAllRolesAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getAllRolesAction.failure(err));
  }
}

export function* createUpdateAccountSaga(action: ActionType<typeof createUpdateAccountAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.createUpdateAccount, body)) as TCreateUpdateAccountResponse;

    yield put(createUpdateAccountAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(createUpdateAccountAction.failure(err));
  }
}

export function* deleteAccountSaga(action: ActionType<typeof deleteAccountAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.deleteAccount, params)) as TDeleteAccountResponse;

    yield put(deleteAccountAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(deleteAccountAction.failure(err));
  }
}
export function* changePasswordAccountSaga(action: ActionType<typeof changePasswordAccountAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(ControllerInstance.changePasswordAccount, body)) as TChangePasswordAccountResponse;

    authHelpers.storeAccessToken(response.data.token);

    yield put(changePasswordAccountAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(changePasswordAccountAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getAccountsAction.request.type, getAccountsSaga)]);
  yield all([takeLatest(getAccountAction.request.type, getAccountSaga)]);
  yield all([takeLatest(getAllRolesAction.request.type, getAllRolesSaga)]);
  yield all([takeLatest(createUpdateAccountAction.request.type, createUpdateAccountSaga)]);
  yield all([takeLatest(deleteAccountAction.request.type, deleteAccountSaga)]);
  yield all([takeLatest(changePasswordAccountAction.request.type, changePasswordAccountSaga)]);
}

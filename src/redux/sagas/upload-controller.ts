import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import AuthControllerInstance from '@/services/api/upload-controller';
import { TUploadFileResponse } from '@/services/api/upload-controller/types';
import { uploadFileAction } from '@/redux/actions';

export function* uploadFileSaga(action: ActionType<typeof uploadFileAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.uploadFile, body)) as TUploadFileResponse;

    yield put(uploadFileAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(uploadFileAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(uploadFileAction.request.type, uploadFileSaga)]);
}

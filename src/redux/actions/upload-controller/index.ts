import { createActionCreator } from 'deox';

import { TUploadFileRequest, TUploadFileSuccess, TUploadFileFailed } from '@/redux/actions/upload-controller/types';
import { TUploadFileResponse } from '@/services/api/upload-controller/types';

import { EUploadControllerAction } from './constants';

export const uploadFileAction = {
  request: createActionCreator(
    EUploadControllerAction.UPLOAD_FILE_REQUEST,
    (resolve) =>
      (body: FormData, cb?: (response: TUploadFileResponse) => void): TUploadFileRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EUploadControllerAction.UPLOAD_FILE_SUCCESS,
    (resolve) =>
      (response: TUploadFileResponse): TUploadFileSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUploadControllerAction.UPLOAD_FILE_FAILED,
    (resolve) =>
      (error: unknown): TUploadFileFailed =>
        resolve({ error }),
  ),
};

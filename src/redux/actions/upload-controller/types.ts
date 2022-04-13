import { TUploadFileResponse } from '@/services/api/upload-controller/types';
import { EUploadControllerAction } from './constants';

export type TUploadFileRequest = {
  type: EUploadControllerAction.UPLOAD_FILE_REQUEST;
  payload: {
    body: FormData;
    cb?: (response: TUploadFileResponse) => void;
  };
};

export type TUploadFileSuccess = {
  type: EUploadControllerAction.UPLOAD_FILE_SUCCESS;
  payload: { response: TUploadFileResponse };
};

export type TUploadFileFailed = { type: EUploadControllerAction.UPLOAD_FILE_FAILED; payload: { error: unknown } };

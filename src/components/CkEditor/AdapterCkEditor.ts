/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-concat */
/* eslint-disable no-multi-assign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import env from '@/env';
import authHelper from '@/services/helpers';
import { getFullPathFile } from '@/utils/functions';

class MyUploadAdapter {
  constructor(loader) {
    // CKEditor 5's FileLoader instance.
    this.loader = loader;

    // URL where to send files.
    this.url = `${env.api.baseUrl.service}/api/File/UploadFile`;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          this._initRequest();
          this._initListeners(resolve, reject, file);
          this._sendRequest(file);
        }),
    );
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());

    xhr.open('POST', this.url, true);
    xhr.setRequestHeader('Authorization', `${authHelper.getAccessToken()}`);
    xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject) {
    const { xhr } = this;
    const { loader } = this;
    const genericErrorText = "Couldn't upload file:" + ` ${loader.file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const { response } = xhr;

      if (!response || response.error) {
        return reject(response && response.error ? response.error.message : genericErrorText);
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      resolve({
        default: getFullPathFile(response.data.path),
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    const data = new FormData();

    data.append('file', file);

    this.xhr.send(data);
  }
}

export default MyUploadAdapter;

import { all, fork } from 'redux-saga/effects';

import authControllerSaga from './auth-controller';
import accountControllerSaga from './account-controller';
import clientControllerSaga from './client-controller';
import uploadControllerSaga from './upload-controller';
import bannerControllerSaga from './banner-controller';
import articleControllerSaga from './article-controller';

const rootSaga = function* root(): Generator {
  yield all([
    fork(articleControllerSaga),
    fork(bannerControllerSaga),
    fork(uploadControllerSaga),
    fork(clientControllerSaga),
    fork(accountControllerSaga),
    fork(authControllerSaga),
  ]);
};

export default rootSaga;

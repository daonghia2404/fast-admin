import { all, fork } from 'redux-saga/effects';

import authControllerSaga from './auth-controller';

const rootSaga = function* root(): Generator {
  yield all([fork(authControllerSaga)]);
};

export default rootSaga;

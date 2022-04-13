import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import uiReducer from './ui';
import authReducer from './auth';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  uiReducer,
  authReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;

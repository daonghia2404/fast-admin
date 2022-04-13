import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import uiReducer from './ui';
import authReducer from './auth';
import accountReducer from './account';
import clientReducer from './client';
import bannerReducer from './banner';
import articleReducer from './article';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  uiReducer,
  authReducer,
  accountReducer,
  clientReducer,
  bannerReducer,
  articleReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;

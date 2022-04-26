import { createActionCreator } from 'deox';

import { EUIAction } from './constants';
import { TResetActionStatus, TSetDevice, TToggleLoginModal, TToggleRegisterModal } from './types';

export const uiActions = {
  setDevice: createActionCreator(
    EUIAction.SET_DEVICE,
    (resolve) =>
      (deviceWidth: number): TSetDevice =>
        resolve({ deviceWidth }),
  ),
  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) =>
      (actionName: string): TResetActionStatus =>
        resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
  toggleRegisterModal: createActionCreator(
    EUIAction.TOGGLE_REGISTER_MODAL,
    (resolve) =>
      (visible: boolean): TToggleRegisterModal =>
        resolve({ visible }),
  ),
  toggleLoginModal: createActionCreator(
    EUIAction.TOGGLE_LOGIN_MODAL,
    (resolve) =>
      (visible: boolean): TToggleLoginModal =>
        resolve({ visible }),
  ),
};

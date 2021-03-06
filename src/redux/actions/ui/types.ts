import { EUIAction } from './constants';

export type TSetDevice = { type: EUIAction.SET_DEVICE; payload: { deviceWidth: number } };
export type TResetActionStatus = { type: EUIAction.RESET_ACTION_STATUS };
export type TToggleRegisterModal = { type: EUIAction.TOGGLE_REGISTER_MODAL; payload: { visible: boolean } };
export type TToggleLoginModal = { type: EUIAction.TOGGLE_LOGIN_MODAL; payload: { visible: boolean } };

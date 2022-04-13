import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Modal from '@/components/Modal';
import BgAuth from '@/assets/images/bg-auth.png';
import { EKeyTabAuthModal } from '@/containers/AuthModal/AuthModal.enums';
import SignIn from '@/containers/AuthModal/SignIn';
import SignUp from '@/containers/AuthModal/SignUp';
import VetifyAccount from '@/containers/AuthModal/VetifyAccount';
import FindAccount from '@/containers/AuthModal/FindAccount';
import ChangePassword from '@/containers/AuthModal/ChangePassword';
import { TForgotPasswordBody, TRegisterBody } from '@/services/api/auth-controller/types';

import { TAuthModalProps } from './AuthModal.types';
import './AuthModal.scss';

const AuthModal: React.FC<TAuthModalProps> = ({ visible, tabKey, onClose, onSignInSuccess }) => {
  const [keyTab, setKeyTab] = useState<{
    data?: any;
    prevKey?: EKeyTabAuthModal;
    key: EKeyTabAuthModal;
  }>({
    key: tabKey || EKeyTabAuthModal.SIGN_IN,
  });
  const isSignInTab = keyTab.key === EKeyTabAuthModal.SIGN_IN;

  const isAuthLayout = [EKeyTabAuthModal.SIGN_IN, EKeyTabAuthModal.SIGN_UP].includes(keyTab.key);

  const handleChangeKeyTab = (key: EKeyTabAuthModal, data?: any, prevKey?: EKeyTabAuthModal): void => {
    setKeyTab({
      key,
      data,
      prevKey,
    });
  };

  const handleClickForgotPassword = (): void => {
    handleChangeKeyTab(EKeyTabAuthModal.FIND_ACCOUNT);
  };

  const handleForgotPasswordSuccess = (data: TForgotPasswordBody): void => {
    handleChangeKeyTab(EKeyTabAuthModal.CHANGE_PASSWORD, data);
  };

  const handleSignUpSuccess = (data: TRegisterBody): void => {
    handleChangeKeyTab(EKeyTabAuthModal.VETIFY_ACCOUNT, data, EKeyTabAuthModal.SIGN_UP);
  };

  const handleConfirmOtpForgotPasswordSuccess = (data: any): void => {
    handleChangeKeyTab(EKeyTabAuthModal.CHANGE_PASSWORD, data);
  };

  const handleConfirmOtpSignInSuccess = (): void => {
    handleChangeKeyTab(EKeyTabAuthModal.SIGN_IN);
  };

  const handleChangePasswordSuccess = (): void => {
    handleChangeKeyTab(EKeyTabAuthModal.SIGN_IN);
  };

  const renderSectionTab = (): React.ReactNode => {
    switch (keyTab.key) {
      case EKeyTabAuthModal.SIGN_IN:
        return <SignIn onClickForgotPassword={handleClickForgotPassword} onSubmit={onSignInSuccess} />;
      case EKeyTabAuthModal.SIGN_UP:
        return <SignUp onSubmit={handleSignUpSuccess} />;
      case EKeyTabAuthModal.FIND_ACCOUNT:
        return <FindAccount onSubmit={handleForgotPasswordSuccess} />;
      case EKeyTabAuthModal.VETIFY_ACCOUNT:
        return (
          <VetifyAccount
            prevKey={keyTab.prevKey}
            data={keyTab.data}
            onConfirmOtpSignIn={handleConfirmOtpSignInSuccess}
            onConfirmOtpForgotPassword={handleConfirmOtpForgotPasswordSuccess}
          />
        );
      case EKeyTabAuthModal.CHANGE_PASSWORD:
        return <ChangePassword data={keyTab.data} onSubmit={handleChangePasswordSuccess} />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    if (tabKey)
      setKeyTab({
        key: tabKey,
      });
  }, [tabKey]);

  return (
    <Modal
      visible={visible}
      maxWidth="116rem"
      closeable={false}
      className="AuthModal"
      wrapClassName="AuthModal-wrapper"
      onClose={onClose}
    >
      <div className="AuthModal-main flex">
        <div className="AuthModal-main-item">
          <img className="AuthModal-main-item-image" src={BgAuth} alt="" />
        </div>
        <div className="AuthModal-main-item">
          {isAuthLayout && (
            <>
              <div className="AuthModal-tabs flex items-center">
                <div
                  className={classNames('AuthModal-tabs-item flex items-center justify-center', {
                    active: keyTab.key === EKeyTabAuthModal.SIGN_IN,
                  })}
                  onClick={(): void => handleChangeKeyTab(EKeyTabAuthModal.SIGN_IN)}
                >
                  Đăng Nhập
                </div>
                <div
                  className={classNames('AuthModal-tabs-item flex items-center justify-center', {
                    active: keyTab.key === EKeyTabAuthModal.SIGN_UP,
                  })}
                  onClick={(): void => handleChangeKeyTab(EKeyTabAuthModal.SIGN_UP)}
                >
                  Đăng Ký
                </div>
              </div>
              <div className="AuthModal-title">Welcome back!</div>
              <div className="AuthModal-description">
                {isSignInTab ? 'Đăng nhập để tiếp tục.' : 'Đăng ký để tham gia cùng chúng tôi.'}
              </div>
            </>
          )}
          {renderSectionTab()}
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;

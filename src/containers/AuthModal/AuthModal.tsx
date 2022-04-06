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

import { TAuthModalProps } from './AuthModal.types';
import './AuthModal.scss';

const AuthModal: React.FC<TAuthModalProps> = ({ visible, tabKey, onClose, onSignInSuccess }) => {
  const [keyTab, setKeyTab] = useState<EKeyTabAuthModal>(tabKey || EKeyTabAuthModal.SIGN_IN);
  const isSignInTab = keyTab === EKeyTabAuthModal.SIGN_IN;

  const isAuthLayout = [EKeyTabAuthModal.SIGN_IN, EKeyTabAuthModal.SIGN_UP].includes(keyTab);

  const handleChangeKeyTab = (key: EKeyTabAuthModal): void => {
    setKeyTab(key);
  };

  const handleNextStep = (): void => {
    switch (keyTab) {
      case EKeyTabAuthModal.SIGN_IN:
        setKeyTab(EKeyTabAuthModal.FIND_ACCOUNT);
        break;
      case EKeyTabAuthModal.FIND_ACCOUNT:
        setKeyTab(EKeyTabAuthModal.VETIFY_ACCOUNT);
        break;
      case EKeyTabAuthModal.VETIFY_ACCOUNT:
        setKeyTab(EKeyTabAuthModal.CHANGE_PASSWORD);
        break;
      case EKeyTabAuthModal.CHANGE_PASSWORD:
      case EKeyTabAuthModal.SIGN_UP:
        setKeyTab(EKeyTabAuthModal.SIGN_IN);
        break;

      default:
        break;
    }
  };

  const renderSectionTab = (): React.ReactNode => {
    switch (keyTab) {
      case EKeyTabAuthModal.SIGN_IN:
        return <SignIn onClickForgotPassword={handleNextStep} onSubmit={onSignInSuccess} />;
      case EKeyTabAuthModal.SIGN_UP:
        return <SignUp onSubmit={handleNextStep} />;
      case EKeyTabAuthModal.FIND_ACCOUNT:
        return <FindAccount onSubmit={handleNextStep} />;
      case EKeyTabAuthModal.VETIFY_ACCOUNT:
        return <VetifyAccount onSubmit={handleNextStep} />;
      case EKeyTabAuthModal.CHANGE_PASSWORD:
        return <ChangePassword onSubmit={handleNextStep} />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    if (tabKey) setKeyTab(tabKey);
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
      <div className="AuthModal-main flex items-center">
        <div className="AuthModal-main-item">
          <img className="AuthModal-main-item-image" src={BgAuth} alt="" />
        </div>
        <div className="AuthModal-main-item">
          {isAuthLayout ? (
            <>
              <div className="AuthModal-tabs flex items-center">
                <div
                  className={classNames('AuthModal-tabs-item flex items-center justify-center', {
                    active: keyTab === EKeyTabAuthModal.SIGN_IN,
                  })}
                  onClick={(): void => handleChangeKeyTab(EKeyTabAuthModal.SIGN_IN)}
                >
                  Đăng Nhập
                </div>
                <div
                  className={classNames('AuthModal-tabs-item flex items-center justify-center', {
                    active: keyTab === EKeyTabAuthModal.SIGN_UP,
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

              {renderSectionTab()}
            </>
          ) : (
            <>{renderSectionTab()}</>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;

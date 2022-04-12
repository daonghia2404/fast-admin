import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Logo from '@/assets/images/logo.svg';
import { dataHeaderMenu } from '@/containers/Header/Header.data';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { EDeviceType } from '@/redux/reducers/ui';
import AuthModal from '@/containers/AuthModal';
import { EKeyTabAuthModal } from '@/containers/AuthModal/AuthModal.enums';
import PrivacyPolicyModal from '@/containers/PrivacyPolicyModal';
import Avatar from '@/components/Avatar';
import DropdownCustom from '@/components/DropdownCustom';
import ChangePasswordModal from '@/containers/ChangePasswordModal';
import UpdateInfoAccountModal from '@/containers/UpdateInfoAccountModal';
import { THeaderProps } from '@/containers/Header/Header.types';
import { useOnClickOutside } from '@/utils/hooks';

import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const deviceType = useSelector((state: TRootState) => state.uiReducer.device);
  const isMobile = deviceType.type === EDeviceType.MOBILE;
  const isSmallMobile = deviceType.width <= 991;
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isLogged, setIsLogged] = useState<boolean>(false);

  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const [authModalState, setAuthModalState] = useState<{
    visible: boolean;
    tabKey?: EKeyTabAuthModal;
  }>({
    visible: false,
  });
  const [privacyPolicyModalState, setPrivacyPolicyModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });
  const [changePasswordModalState, setChangePasswordModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });
  const [updateInfoAccountModalState, setUpdateInfoAccountModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  useOnClickOutside(menuRef, (): void => setVisibleMenu(false));

  const handleToggleVisibleMenu = (): void => {
    setVisibleMenu(!visibleMenu);
  };

  const handleOpenAuthModal = (tabKey: EKeyTabAuthModal): void => {
    setAuthModalState({
      visible: true,
      tabKey,
    });
  };
  const handleCloseAuthModal = (): void => {
    setAuthModalState({
      visible: false,
    });
  };

  const handleOpenPrivacyPolicyModal = (): void => {
    setPrivacyPolicyModalState({
      visible: true,
    });
  };
  const handleClosePrivacyPolicyModal = (): void => {
    setPrivacyPolicyModalState({
      visible: false,
    });
  };
  const handleOpenChangePasswordModal = (): void => {
    setChangePasswordModalState({
      visible: true,
    });
  };
  const handleCloseChangePasswordModal = (): void => {
    setChangePasswordModalState({
      visible: false,
    });
  };
  const handleOpenUpdateInfoAccountModal = (): void => {
    setUpdateInfoAccountModalState({
      visible: true,
    });
  };
  const handleCloseUpdateInfoAccountModal = (): void => {
    setUpdateInfoAccountModalState({
      visible: false,
    });
  };

  const handleSignInSuccess = (): void => {
    setIsLogged(true);
    handleCloseAuthModal();
  };

  const renderHeaderAccountDropdown = (): React.ReactElement => {
    return (
      <div>
        <div className="Header-account-overlay-info">
          <div className="Header-account-overlay-info-avatar flex justify-center items-center">
            <Avatar size={120} />
          </div>
          <div className="Header-account-overlay-info-name">Admin</div>
        </div>
        <div className="Header-account-overlay-list">
          <div
            className="Header-account-overlay-list-item flex items-center"
            onClick={handleOpenUpdateInfoAccountModal}
          >
            <div className="Header-account-overlay-list-item-icon">
              <Icon name={EIconName.UserSquare} />
            </div>
            <div className="Header-account-overlay-list-item-title">Thông tin cá nhân</div>
          </div>
          <div className="Header-account-overlay-list-item flex items-center" onClick={handleOpenPrivacyPolicyModal}>
            <div className="Header-account-overlay-list-item-icon">
              <Icon name={EIconName.Book} />
            </div>
            <div className="Header-account-overlay-list-item-title">Điều khoản chính sách</div>
          </div>
          <div className="Header-account-overlay-list-item flex items-center" onClick={handleOpenChangePasswordModal}>
            <div className="Header-account-overlay-list-item-icon">
              <Icon name={EIconName.Locked} />
            </div>
            <div className="Header-account-overlay-list-item-title">Đổi mật khẩu</div>
          </div>
          <div className="Header-account-overlay-list-item flex items-center">
            <div className="Header-account-overlay-list-item-icon">
              <Icon name={EIconName.Logout} />
            </div>
            <div className="Header-account-overlay-list-item-title">Đăng xuất</div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!isMobile) setVisibleMenu(false);
  }, [isMobile]);

  return (
    <div className={classNames('Header flex justify-between items-center', { visible: visibleMenu })}>
      <div className="Header-item">
        <div className="Header-logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="Header-item flex items-center">
        {isMobile && (
          <div className="Header-btn-menu" onClick={handleToggleVisibleMenu}>
            <Icon name={EIconName.Menu} color={EIconColor.WHITE} />
          </div>
        )}

        <div className="Header-nav flex items-center" ref={menuRef}>
          {dataHeaderMenu.map((item) => (
            <div className={classNames('Header-nav-item', { disabled: item.disabled })}>
              <Link to={item.link}>{item.title}</Link>
            </div>
          ))}

          {isSmallMobile && (
            <>
              <div className="Header-nav-item">
                <Button
                  title="Đăng Nhập"
                  uppercase
                  onClick={(): void => handleOpenAuthModal(EKeyTabAuthModal.SIGN_IN)}
                />
              </div>
              <div className="Header-nav-item">
                <Button
                  title="Đăng Ký"
                  uppercase
                  type="primary"
                  onClick={(): void => handleOpenAuthModal(EKeyTabAuthModal.SIGN_UP)}
                />
              </div>
            </>
          )}
        </div>
        {isLogged ? (
          <DropdownCustom overlayClassName="Header-account-overlay" overlay={renderHeaderAccountDropdown()}>
            <div className="Header-account flex items-center">
              <div className="Header-account-avatar">
                <Avatar size={24} />
              </div>
              <div className="Header-account-name">Admin</div>
              <div className="Header-account-arrow">
                <Icon name={EIconName.AngleDown} color={EIconColor.WHITE} />
              </div>
            </div>
          </DropdownCustom>
        ) : (
          <>
            {!isSmallMobile && (
              <div className="Header-btns flex items-center">
                <Button
                  title="Đăng Nhập"
                  uppercase
                  onClick={(): void => handleOpenAuthModal(EKeyTabAuthModal.SIGN_IN)}
                />
                <Button
                  title="Đăng Ký"
                  uppercase
                  type="primary"
                  onClick={(): void => handleOpenAuthModal(EKeyTabAuthModal.SIGN_UP)}
                />
              </div>
            )}
          </>
        )}
      </div>

      <ChangePasswordModal {...changePasswordModalState} onClose={handleCloseChangePasswordModal} />

      <UpdateInfoAccountModal {...updateInfoAccountModalState} onClose={handleCloseUpdateInfoAccountModal} />

      <AuthModal {...authModalState} onClose={handleCloseAuthModal} onSignInSuccess={handleSignInSuccess} />

      <PrivacyPolicyModal {...privacyPolicyModalState} onClose={handleClosePrivacyPolicyModal} />
    </div>
  );
};

export default Header;

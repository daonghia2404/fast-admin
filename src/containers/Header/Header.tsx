import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, navigate, useLocation } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

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
import { LayoutPaths, Paths } from '@/pages/routers';
import AuthHelpers from '@/services/helpers';
import { getLogoAction, getUserInfoAction, uiActions } from '@/redux/actions';
import ModalConfirm from '@/containers/ModalConfirm';
import { getFullPathFile } from '@/utils/functions';

import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const dispatch = useDispatch();
  const deviceType = useSelector((state: TRootState) => state.uiReducer.device);
  const isMobile = deviceType.type === EDeviceType.MOBILE;
  const isSmallMobile = deviceType.width <= 991;
  const menuRef = useRef<HTMLDivElement | null>(null);
  const atk = AuthHelpers.getAccessToken();
  const { pathname } = useLocation();

  const [visibleLogoutModal, setVisibleLogoutModal] = useState<boolean>(false);

  const userInfoState = useSelector((state: TRootState) => state.authReducer.user);
  const logoState = useSelector((state: TRootState) => state.bannerReducer.logo?.data?.ListImage?.[0]?.filePath);
  const visibleRegisterModalState = useSelector((state: TRootState) => state.uiReducer.visibleRegisterModal);
  const visibleLoginModalState = useSelector((state: TRootState) => state.uiReducer.visibleLoginModal);

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
    dispatch(uiActions.toggleRegisterModal(false));
    dispatch(uiActions.toggleLoginModal(false));
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
    handleCloseAuthModal();
  };

  const getUserInfoData = useCallback(() => {
    dispatch(getUserInfoAction.request());
  }, [dispatch]);

  const handleOpenLogoutModal = (): void => {
    setVisibleLogoutModal(true);
  };
  const handleCloseLogoutModal = (): void => {
    setVisibleLogoutModal(false);
  };
  const handleSubmitLogoutModal = (): void => {
    handleCloseLogoutModal();
    AuthHelpers.clearTokens();
    navigate(Paths.Home);
    dispatch(getUserInfoAction.success({ data: undefined, message: '', status: false }));
  };

  const getLogoData = useCallback(() => {
    dispatch(getLogoAction.request());
  }, [dispatch]);

  const renderHeaderAccountDropdown = (): React.ReactElement => {
    return (
      <div>
        <div className="Header-account-overlay-info">
          <div className="Header-account-overlay-info-avatar flex justify-center items-center">
            <Avatar size={120} />
          </div>
          <div className="Header-account-overlay-info-name">{userInfoState?.data?.username}</div>
        </div>
        <div className="Header-account-overlay-list">
          {userInfoState?.data?.isAdmin && (
            <div
              className="Header-account-overlay-list-item flex items-center"
              onClick={(): void => {
                navigate(LayoutPaths.Admin);
              }}
            >
              <div className="Header-account-overlay-list-item-icon">
                <Icon name={EIconName.Dashboard} />
              </div>
              <div className="Header-account-overlay-list-item-title">Qu???n tr??? h??? th???ng</div>
            </div>
          )}
          <div
            className="Header-account-overlay-list-item flex items-center"
            onClick={handleOpenUpdateInfoAccountModal}
          >
            <div className="Header-account-overlay-list-item-icon">
              <Icon name={EIconName.UserSquare} />
            </div>
            <div className="Header-account-overlay-list-item-title">Th??ng tin c?? nh??n</div>
          </div>
          <div className="Header-account-overlay-list-item flex items-center" onClick={handleOpenPrivacyPolicyModal}>
            <div className="Header-account-overlay-list-item-icon">
              <Icon name={EIconName.Book} />
            </div>
            <div className="Header-account-overlay-list-item-title">??i???u kho???n ch??nh s??ch</div>
          </div>
          <div className="Header-account-overlay-list-item flex items-center" onClick={handleOpenChangePasswordModal}>
            <div className="Header-account-overlay-list-item-icon">
              <Icon name={EIconName.Locked} />
            </div>
            <div className="Header-account-overlay-list-item-title">?????i m???t kh???u</div>
          </div>
          <div className="Header-account-overlay-list-item flex items-center" onClick={handleOpenLogoutModal}>
            <div className="Header-account-overlay-list-item-icon">
              <Icon name={EIconName.Logout} />
            </div>
            <div className="Header-account-overlay-list-item-title">????ng xu???t</div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getLogoData();
  }, [getLogoData]);

  useEffect(() => {
    if (!isMobile) setVisibleMenu(false);
  }, [isMobile]);

  useEffect(() => {
    if (atk) getUserInfoData();
  }, [atk, getUserInfoData]);

  useEffect(() => {
    if (visibleRegisterModalState) {
      handleOpenAuthModal(EKeyTabAuthModal.SIGN_UP);
    }
  }, [visibleRegisterModalState]);

  useEffect(() => {
    if (visibleLoginModalState) {
      handleOpenAuthModal(EKeyTabAuthModal.SIGN_IN);
    }
  }, [visibleLoginModalState]);

  return (
    <div className={classNames('Header flex justify-between items-center', { visible: visibleMenu })}>
      <div className="Header-item">
        <div className="Header-logo">
          <Link to={Paths.Home}>{logoState && <img src={getFullPathFile(logoState)} alt="" />}</Link>
        </div>
      </div>
      <div className="Header-item flex items-center">
        {isMobile && (
          <div className="Header-btn-menu" onClick={handleToggleVisibleMenu}>
            <Icon name={EIconName.Menu} color={EIconColor.WHITE} />
          </div>
        )}

        <div className="Header-nav flex items-center" ref={menuRef}>
          {dataHeaderMenu.map((item) => {
            if (item.checkAuth) {
              if (atk) {
                return (
                  <div
                    className={classNames('Header-nav-item', { disabled: false }, { active: pathname === item.link })}
                  >
                    <Link to={item.link}>{item.title}</Link>
                  </div>
                );
              }

              return <></>;
            }

            return (
              <div className={classNames('Header-nav-item', { disabled: false }, { active: pathname === item.link })}>
                <Link to={item.link}>{item.title}</Link>
              </div>
            );
          })}

          {isSmallMobile && (
            <>
              <div className="Header-nav-item">
                <Button
                  title="????ng Nh???p"
                  uppercase
                  onClick={(): void => handleOpenAuthModal(EKeyTabAuthModal.SIGN_IN)}
                />
              </div>
              <div className="Header-nav-item">
                <Button
                  title="????ng K??"
                  uppercase
                  type="primary"
                  onClick={(): void => handleOpenAuthModal(EKeyTabAuthModal.SIGN_UP)}
                />
              </div>
            </>
          )}
        </div>
        {userInfoState?.data ? (
          <DropdownCustom overlayClassName="Header-account-overlay" overlay={renderHeaderAccountDropdown()}>
            <div className="Header-account flex items-center">
              <div className="Header-account-avatar">
                <Avatar size={24} />
              </div>
              <div className="Header-account-name">{userInfoState?.data?.username}</div>
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
                  title="????ng Nh???p"
                  uppercase
                  onClick={(): void => handleOpenAuthModal(EKeyTabAuthModal.SIGN_IN)}
                />
                <Button
                  title="????ng K??"
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

      <UpdateInfoAccountModal
        {...updateInfoAccountModalState}
        onClose={handleCloseUpdateInfoAccountModal}
        onSubmit={getUserInfoData}
      />

      <AuthModal {...authModalState} onClose={handleCloseAuthModal} onSignInSuccess={handleSignInSuccess} />

      <PrivacyPolicyModal {...privacyPolicyModalState} onClose={handleClosePrivacyPolicyModal} />

      <ModalConfirm
        visible={visibleLogoutModal}
        title="????ng xu???t"
        description="B???n c?? ch???c ch???n mu???n ????ng xu???t t??i kho???n ??? phi??n ????ng nh???p n??y?"
        onClose={handleCloseLogoutModal}
        onSubmit={handleSubmitLogoutModal}
      />
    </div>
  );
};

export default Header;

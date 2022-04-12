import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Logo from '@/assets/images/logo.svg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { EDeviceType } from '@/redux/reducers/ui';
import PrivacyPolicyModal from '@/containers/PrivacyPolicyModal';
import Avatar from '@/components/Avatar';
import DropdownCustom from '@/components/DropdownCustom';
import ChangePasswordModal from '@/containers/ChangePasswordModal';
import UpdateInfoAccountModal from '@/containers/UpdateInfoAccountModal';
import { useOnClickOutside } from '@/utils/hooks';

import './HeaderAdmin.scss';

const HeaderAdmin: React.FC = () => {
  const deviceType = useSelector((state: TRootState) => state.uiReducer.device);
  const isMobile = deviceType.type === EDeviceType.MOBILE;
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

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

  const renderHeaderAdminAccountDropdown = (): React.ReactElement => {
    return (
      <div>
        <div className="HeaderAdmin-account-overlay-info">
          <div className="HeaderAdmin-account-overlay-info-avatar flex justify-center items-center">
            <Avatar size={120} />
          </div>
          <div className="HeaderAdmin-account-overlay-info-name">Admin</div>
        </div>
        <div className="HeaderAdmin-account-overlay-list">
          <div
            className="HeaderAdmin-account-overlay-list-item flex items-center"
            onClick={handleOpenUpdateInfoAccountModal}
          >
            <div className="HeaderAdmin-account-overlay-list-item-icon">
              <Icon name={EIconName.UserSquare} />
            </div>
            <div className="HeaderAdmin-account-overlay-list-item-title">Thông tin cá nhân</div>
          </div>
          <div
            className="HeaderAdmin-account-overlay-list-item flex items-center"
            onClick={handleOpenPrivacyPolicyModal}
          >
            <div className="HeaderAdmin-account-overlay-list-item-icon">
              <Icon name={EIconName.Book} />
            </div>
            <div className="HeaderAdmin-account-overlay-list-item-title">Điều khoản chính sách</div>
          </div>
          <div
            className="HeaderAdmin-account-overlay-list-item flex items-center"
            onClick={handleOpenChangePasswordModal}
          >
            <div className="HeaderAdmin-account-overlay-list-item-icon">
              <Icon name={EIconName.Locked} />
            </div>
            <div className="HeaderAdmin-account-overlay-list-item-title">Đổi mật khẩu</div>
          </div>
          <div className="HeaderAdmin-account-overlay-list-item flex items-center">
            <div className="HeaderAdmin-account-overlay-list-item-icon">
              <Icon name={EIconName.Logout} />
            </div>
            <div className="HeaderAdmin-account-overlay-list-item-title">Đăng xuất</div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!isMobile) setVisibleMenu(false);
  }, [isMobile]);

  return (
    <div className={classNames('HeaderAdmin flex justify-between items-center', { visible: visibleMenu })}>
      <div className="HeaderAdmin-item">
        <div className="HeaderAdmin-logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="HeaderAdmin-item flex items-center">
        {isMobile && (
          <div className="HeaderAdmin-btn-menu" onClick={handleToggleVisibleMenu}>
            <Icon name={EIconName.Menu} color={EIconColor.WHITE} />
          </div>
        )}

        <div className="HeaderAdmin-actions flex items-center">
          <div className="HeaderAdmin-actions-item">
            <Icon name={EIconName.House} color={EIconColor.WHITE} />
          </div>
          <div className="HeaderAdmin-actions-item">
            <div className="HeaderAdmin-actions-item-badge success" />
            <Icon name={EIconName.Mail} color={EIconColor.WHITE} />
          </div>
          <div className="HeaderAdmin-actions-item">
            <div className="HeaderAdmin-actions-item-badge error" />
            <Icon name={EIconName.Bell} color={EIconColor.WHITE} />
          </div>
        </div>

        <DropdownCustom overlayClassName="HeaderAdmin-account-overlay" overlay={renderHeaderAdminAccountDropdown()}>
          <div className="HeaderAdmin-account flex items-center">
            <div className="HeaderAdmin-account-avatar">
              <Avatar size={24} />
            </div>
            <div className="HeaderAdmin-account-name">Admin</div>
            <div className="HeaderAdmin-account-arrow">
              <Icon name={EIconName.AngleDown} color={EIconColor.WHITE} />
            </div>
          </div>
        </DropdownCustom>
      </div>

      <ChangePasswordModal {...changePasswordModalState} onClose={handleCloseChangePasswordModal} />

      <UpdateInfoAccountModal {...updateInfoAccountModalState} onClose={handleCloseUpdateInfoAccountModal} />

      <PrivacyPolicyModal {...privacyPolicyModalState} onClose={handleClosePrivacyPolicyModal} />
    </div>
  );
};

export default HeaderAdmin;

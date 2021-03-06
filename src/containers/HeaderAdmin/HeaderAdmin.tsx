import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import PrivacyPolicyModal from '@/containers/PrivacyPolicyModal';
import Avatar from '@/components/Avatar';
import DropdownCustom from '@/components/DropdownCustom';
import ChangePasswordModal from '@/containers/ChangePasswordModal';
import UpdateInfoAccountModal from '@/containers/UpdateInfoAccountModal';
import { LayoutPaths, Paths } from '@/pages/routers';
import AuthHelpers from '@/services/helpers';
import ModalConfirm from '@/containers/ModalConfirm';
import { getLogoAction, getUserInfoAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { getFullPathFile } from '@/utils/functions';

import './HeaderAdmin.scss';

const HeaderAdmin: React.FC = () => {
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();

  const userInfoState = useSelector((state: TRootState) => state.authReducer.user);
  const logoState = useSelector((state: TRootState) => state.bannerReducer.logo?.data?.ListImage?.[0]?.filePath);

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

  const [visibleLogoutModal, setVisibleLogoutModal] = useState<boolean>(false);

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

  const renderHeaderAdminAccountDropdown = (): React.ReactElement => {
    return (
      <div>
        <div className="HeaderAdmin-account-overlay-info">
          <div className="HeaderAdmin-account-overlay-info-avatar flex justify-center items-center">
            <Avatar size={120} />
          </div>
          <div className="Header-account-overlay-info-name">{userInfoState?.data?.username}</div>
        </div>
        <div className="HeaderAdmin-account-overlay-list">
          <div
            className="HeaderAdmin-account-overlay-list-item flex items-center"
            onClick={handleOpenUpdateInfoAccountModal}
          >
            <div className="HeaderAdmin-account-overlay-list-item-icon">
              <Icon name={EIconName.UserSquare} />
            </div>
            <div className="HeaderAdmin-account-overlay-list-item-title">Th??ng tin c?? nh??n</div>
          </div>
          <div
            className="HeaderAdmin-account-overlay-list-item flex items-center"
            onClick={handleOpenPrivacyPolicyModal}
          >
            <div className="HeaderAdmin-account-overlay-list-item-icon">
              <Icon name={EIconName.Book} />
            </div>
            <div className="HeaderAdmin-account-overlay-list-item-title">??i???u kho???n ch??nh s??ch</div>
          </div>
          <div
            className="HeaderAdmin-account-overlay-list-item flex items-center"
            onClick={handleOpenChangePasswordModal}
          >
            <div className="HeaderAdmin-account-overlay-list-item-icon">
              <Icon name={EIconName.Locked} />
            </div>
            <div className="HeaderAdmin-account-overlay-list-item-title">?????i m???t kh???u</div>
          </div>
          <div className="HeaderAdmin-account-overlay-list-item flex items-center" onClick={handleOpenLogoutModal}>
            <div className="HeaderAdmin-account-overlay-list-item-icon">
              <Icon name={EIconName.Logout} />
            </div>
            <div className="HeaderAdmin-account-overlay-list-item-title">????ng xu???t</div>
          </div>
        </div>
      </div>
    );
  };

  const getUserInfoData = useCallback(() => {
    dispatch(getUserInfoAction.request());
  }, [dispatch]);

  useEffect(() => {
    getLogoData();
  }, [getLogoData]);

  useEffect(() => {
    if (atk) getUserInfoData();
  }, [atk, getUserInfoData]);

  return (
    <div className={classNames('HeaderAdmin flex justify-between items-center')}>
      <div className="HeaderAdmin-item">
        <div className="HeaderAdmin-logo">
          <Link to={LayoutPaths.Admin}>{logoState && <img src={getFullPathFile(logoState)} alt="" />}</Link>
        </div>
      </div>
      <div className="HeaderAdmin-item flex items-center">
        <div className="HeaderAdmin-actions flex items-center">
          <div
            className="HeaderAdmin-actions-item"
            onClick={(): void => {
              navigate(Paths.Home);
            }}
          >
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
            <div className="HeaderAdmin-account-name">{userInfoState?.data?.username}</div>
            <div className="HeaderAdmin-account-arrow">
              <Icon name={EIconName.AngleDown} color={EIconColor.WHITE} />
            </div>
          </div>
        </DropdownCustom>
      </div>

      <ChangePasswordModal {...changePasswordModalState} onClose={handleCloseChangePasswordModal} />

      <UpdateInfoAccountModal
        {...updateInfoAccountModalState}
        onClose={handleCloseUpdateInfoAccountModal}
        onSubmit={getUserInfoData}
      />

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

export default HeaderAdmin;

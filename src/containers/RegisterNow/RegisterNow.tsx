/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '@/assets/images/logo_bd.png';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { getMiddleBandAction, uiActions } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import './RegisterNow.scss';

const RegisterNow: React.FC = () => {
  const dispatch = useDispatch();

  const middleBandState = useSelector((state: TRootState) => state.articleReducer.middleBand);
  const article = middleBandState?.data?.ListArticle?.[0];

  const handleOpenRegisterModal = (): void => {
    dispatch(uiActions.toggleRegisterModal(true));
  };

  const getMiddleBandData = useCallback(() => {
    dispatch(getMiddleBandAction.request());
  }, [dispatch]);

  useEffect(() => {
    getMiddleBandData();
  }, [getMiddleBandData]);

  return (
    <div className="RegisterNow">
      <div className="container">
        <div className="RegisterNow-wrapper flex flex-wrap items-center">
          <div className="RegisterNow-wrapper-item">
            <div className="RegisterNow-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="RegisterNow-logo-description">MANG NIỀM TIN ĐẾN VỚI KHÁCH HÀNG</div>
          </div>
          <div className="RegisterNow-wrapper-item">
            <div
              className="RegisterNow-content ck-content style-content-editable"
              dangerouslySetInnerHTML={{ __html: article?.content || '' }}
            />
            {/* <div className="RegisterNow-title">Register with us now</div>
            <div className="RegisterNow-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            </div> */}
            <div className="RegisterNow-btns flex justify-center">
              <Button
                className="outline-white"
                title="Đăng ký ngay"
                uppercase
                size="large"
                icon={<Icon name={EIconName.AngleRight} color={EIconColor.WHITE} />}
                onClick={handleOpenRegisterModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;

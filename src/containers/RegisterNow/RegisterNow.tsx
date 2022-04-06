import React from 'react';

import LogoDark from '@/assets/images/logo-dark.svg';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './RegisterNow.scss';

const RegisterNow: React.FC = () => {
  return (
    <div className="RegisterNow">
      <div className="container">
        <div className="RegisterNow-wrapper flex flex-wrap items-center">
          <div className="RegisterNow-wrapper-item">
            <div className="RegisterNow-logo">
              <img src={LogoDark} alt="" />
            </div>
            <div className="RegisterNow-logo-description">Lorem Ipsum is simply dummy text of the printing</div>
          </div>
          <div className="RegisterNow-wrapper-item">
            <div className="RegisterNow-title">Register with us now</div>
            <div className="RegisterNow-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            </div>
            <div className="RegisterNow-btns flex justify-center">
              <Button
                className="outline-white"
                title="Register Now"
                uppercase
                size="large"
                icon={<Icon name={EIconName.AngleRight} color={EIconColor.WHITE} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;

import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import ImageHomeBanner from '@/assets/images/image-home-banner.png';

import './HomeBanner.scss';

const HomeBanner: React.FC = () => {
  return (
    <div className="HomeBanner">
      <div className="HomeBanner-contact">
        <div className="HomeBanner-contact-item flex flex-col items-center justify-center">
          <div className="HomeBanner-contact-item-icon">
            <Icon name={EIconName.Phone} color={EIconColor.WHITE} />
          </div>
          Liên Hệ
        </div>
        <div className="HomeBanner-contact-item flex flex-col items-center justify-center">
          <div className="HomeBanner-contact-item-icon">
            <Icon name={EIconName.Facebook} color={EIconColor.WHITE} />
          </div>
          Facebook
        </div>
        <div className="HomeBanner-contact-item flex flex-col items-center justify-center">
          <div className="HomeBanner-contact-item-icon">
            <Icon name={EIconName.Wechat} color={EIconColor.WHITE} />
          </div>
          Wechat
        </div>
      </div>
      <div className="HomeBanner-item flex items-center justify-end">
        <div className="HomeBanner-item-image">
          <img src={ImageHomeBanner} alt="" />
        </div>
        <div className="HomeBanner-item-info">
          <div className="HomeBanner-item-subtitle">Lorem Ipsum is simply dummy</div>
          <div className="HomeBanner-item-title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          </div>
          <div className="HomeBanner-item-link flex items-center justify-center">
            View more
            <Icon color={EIconColor.SHAMROCK} name={EIconName.AngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

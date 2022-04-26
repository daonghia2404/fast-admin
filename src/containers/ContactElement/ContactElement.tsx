import React from 'react';

import DropdownCustom from '@/components/DropdownCustom';
import Icon, { EIconName, EIconColor } from '@/components/Icon';

import './ContactElement.scss';

const ContactElement: React.FC = () => {
  const renderContactInfo = (): React.ReactElement => {
    return (
      <div className="ContactElement-contact-body">
        <div className="ContactElement-contact-body-item flex items-start">
          <div className="ContactElement-contact-body-item-icon">
            <Icon name={EIconName.Phone} color={EIconColor.SHAMROCK} />
          </div>
          <div className="ContactElement-contact-body-item-info">
            <div className="ContactElement-contact-body-item-info-title">Điện thoại</div>
            <div className="ContactElement-contact-body-item-info-description">0123 456 789</div>
          </div>
        </div>

        <div className="ContactElement-contact-body-item flex items-start">
          <div className="ContactElement-contact-body-item-icon">
            <Icon name={EIconName.Facebook} color={EIconColor.SHAMROCK} />
          </div>
          <div className="ContactElement-contact-body-item-info">
            <div className="ContactElement-contact-body-item-info-title">Facebook</div>
            <div className="ContactElement-contact-body-item-info-description">G.O.C Express Facebook</div>
          </div>
        </div>

        <div className="ContactElement-contact-body-item flex items-start">
          <div className="ContactElement-contact-body-item-icon">
            <Icon name={EIconName.Wechat} color={EIconColor.SHAMROCK} />
          </div>
          <div className="ContactElement-contact-body-item-info">
            <div className="ContactElement-contact-body-item-info-title">Wechat</div>
            <div className="ContactElement-contact-body-item-info-description">G.O.C Express Wechat</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ContactElement-contact">
      <DropdownCustom
        overlay={renderContactInfo()}
        overlayClassName="ContactElement-contact-wrapper"
        getPopupContainer={(trigger: any): any => trigger?.parentNode}
        placement="topLeft"
      >
        <div className="ContactElement-contact-item flex flex-col items-center justify-center">
          <div className="ContactElement-contact-item-icon">
            <Icon name={EIconName.Headset} color={EIconColor.WHITE} />
          </div>
        </div>
      </DropdownCustom>
    </div>
  );
};

export default ContactElement;

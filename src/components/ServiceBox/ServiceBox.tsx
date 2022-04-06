import React from 'react';
import classNames from 'classnames';

import { TServiceBoxProps } from './ServiceBox.types';

import './ServiceBox.scss';

const ServiceBox: React.FC<TServiceBoxProps> = ({ className, title, description, icon, background }) => {
  return (
    <div className={classNames('ServiceBox', className)}>
      <div className="ServiceBox-title">
        {title}
        <span className="ServiceBox-badge">New</span>
      </div>
      <div className="ServiceBox-description">{description}</div>
      <div className="ServiceBox-image flex items-center justify-center" style={{ background }}>
        <div className="ServiceBox-icon">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;

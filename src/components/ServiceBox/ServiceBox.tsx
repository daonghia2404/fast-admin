import React from 'react';
import classNames from 'classnames';

import { TServiceBoxProps } from './ServiceBox.types';

import './ServiceBox.scss';

const ServiceBox: React.FC<TServiceBoxProps> = ({ className, title, image, description, onClick }) => {
  return (
    <div className={classNames('ServiceBox', className)}>
      <div className="ServiceBox-title" onClick={onClick}>
        {title}
        <span className="ServiceBox-badge">New</span>
      </div>
      <div className="ServiceBox-description">{description}</div>
      <div className="ServiceBox-image" onClick={onClick}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ServiceBox;

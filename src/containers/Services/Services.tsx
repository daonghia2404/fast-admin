import React from 'react';

import ImageServices from '@/assets/images/image-service.png';
import Icon from '@/components/Icon';

import './Services.scss';
import { dataServiceCards } from '@/containers/Services/Services.data';

const Services: React.FC = () => {
  return (
    <div className="Services">
      <div className="container">
        <div className="Services-wrapper flex items-center flex-wrap">
          <div className="Services-wrapper-item">
            <div className="Services-item-image">
              <img src={ImageServices} alt="" />
            </div>
          </div>
          <div className="Services-wrapper-item flex flex-wrap justify-between">
            {dataServiceCards.map((item) => (
              <div key={item.key} className="Services-card flex items-start">
                <div className="Services-card-icon">
                  <Icon name={item.icon} />
                </div>
                <div className="Services-card-info">
                  <div className="Services-card-info-title">{item.title}</div>
                  <div className="Services-card-info-description">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

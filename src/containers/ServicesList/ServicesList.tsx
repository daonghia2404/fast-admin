import React from 'react';

import { dataServicesList } from '@/pages/ServiceDetail/ServiceDetail.data';

import './ServicesList.scss';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

const ServicesList: React.FC = () => {
  return (
    <div className="ServicesList">
      <div className="ServicesList-header flex items-center justify-center">
        <div className="ServicesList-header-title">Các Dịch Vụ Khác</div>
      </div>
      <div className="ServicesList-list">
        {dataServicesList.map((item) => (
          <div className="ServicesList-list-item flex items-start">
            <div className="ServicesList-list-item-image">
              <img src={item.image} alt="" />
            </div>
            <div className="ServicesList-list-item-info">
              <div className="ServicesList-list-item-info-title">{item.title}</div>
              <div className="ServicesList-list-item-info-description">{item.description}</div>
              <div className="ServicesList-list-item-info-date">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="ServicesList-see-more flex items-center justify-center">
        View More
        <Icon name={EIconName.AngleRight} color={EIconColor.SHAMROCK} />
      </div>
    </div>
  );
};

export default ServicesList;

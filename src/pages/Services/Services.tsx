import React from 'react';

import ServiceBox from '@/components/ServiceBox';
import { dataServicesList } from '@/pages/Services/Services.data';
import HomeBanner from '@/containers/HomeBanner';

import './Services.scss';

const Services: React.FC = () => {
  return (
    <div className="Services">
      <HomeBanner />

      <div className="container">
        <div className="Services-wrapper">
          <div className="Services-title">Dịch Vụ</div>
          <div className="Services-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s,
          </div>

          <div className="Services-list flex flex-wrap">
            {dataServicesList.map((item) => (
              <div className="Services-list-item">
                <ServiceBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

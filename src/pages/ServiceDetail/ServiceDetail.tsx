import React from 'react';

import ImageServiceDetail from '@/assets/images/image-service-detail.png';
import ImageServiceDetail1 from '@/assets/images/image-service-detail-1.png';
import ImageServiceDetail2 from '@/assets/images/image-service-detail-2.png';
import ServicesList from '@/containers/ServicesList';

import './ServiceDetail.scss';

const ServiceDetail: React.FC = () => {
  return (
    <div className="ServiceDetail">
      <div className="ServiceDetail-banner">
        <img src={ImageServiceDetail} alt="" />
      </div>

      <div className="container">
        <div className="ServiceDetail-wrapper">
          <div className="ServiceDetail-main flex justify-between flex-wrap">
            <div className="ServiceDetail-main-item">
              <div className="ServiceDetail-card">
                <div className="ServiceDetail-title">Dịch Vụ Vận Chuyển</div>
                <div className="ServiceDetail-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s
                </div>
                <div className="ServiceDetail-image">
                  <img src={ImageServiceDetail1} alt="" />
                </div>
                <div className="ServiceDetail-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="ServiceDetail-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="ServiceDetail-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="ServiceDetail-image">
                  <img src={ImageServiceDetail2} alt="" />
                </div>
                <div className="ServiceDetail-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
            </div>
            <div className="ServiceDetail-main-item">
              <ServicesList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

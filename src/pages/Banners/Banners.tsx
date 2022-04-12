import React from 'react';

import Tabs from '@/components/Tabs';
import BannersTable from '@/pages/Banners/BannersTable';

import './Banners.scss';

const Banners: React.FC = () => {
  const dataTabs = [
    {
      key: '1',
      title: 'Danh sách banner',
      content: <BannersTable />,
    },
  ];

  return (
    <div className="Banners">
      <div className="Banners-tab">
        <Tabs dataTabs={dataTabs} />
      </div>
    </div>
  );
};

export default Banners;

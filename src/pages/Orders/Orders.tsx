import React from 'react';

import Tabs from '@/components/Tabs';
import InputStorage from '@/pages/Orders/InputStorage';
import InputOrder from '@/pages/Orders/InputOrder';
import SearchOrder from '@/pages/Orders/SearchOrder';
import Rules from '@/pages/Orders/Rules';

import { EKeyOrderTab } from './Orders.enums';
import './Orders.scss';

const Orders: React.FC = () => {
  const dataTabs = [
    {
      key: EKeyOrderTab.INPUT_STORAGE,
      title: 'Tra nhập kho',
      content: <InputStorage />,
    },
    {
      key: EKeyOrderTab.RETURN_GOODS,
      title: 'Tra hàng đã trả',
      content: <InputOrder />,
    },
    {
      key: EKeyOrderTab.SEARCH,
      title: 'Tra vận đơn',
      content: <SearchOrder />,
    },
    {
      key: EKeyOrderTab.RULES,
      title: 'Quy định',
      content: <Rules />,
    },
  ];

  return (
    <div className="Orders">
      <div className="Orders-tab">
        <Tabs dataTabs={dataTabs} />
      </div>
    </div>
  );
};

export default Orders;

import React, { useState } from 'react';

import Tabs from '@/components/Tabs';
import InputStorage from '@/pages/Orders/InputStorage';
import QuickOrderModal from '@/containers/QuickOrderModal';
import Rules from '@/pages/Orders/Rules';

import { EKeyOrderTab } from './Orders.enums';
import './Orders.scss';

const Orders: React.FC = () => {
  const [quickOrderModalState, setQuickOrderModalState] = useState<{
    visible: boolean;
    data?: any;
  }>({
    visible: false,
  });

  const handleOpenOrderModalState = (): void => {
    setQuickOrderModalState({ visible: true });
  };

  const handleCloseOrderModalState = (): void => {
    setQuickOrderModalState({ visible: false });
  };

  const dataTabs = [
    {
      key: EKeyOrderTab.INPUT_STORAGE,
      title: 'Nhập kho',
      content: <InputStorage />,
    },
    {
      key: EKeyOrderTab.RETURN_GOODS,
      title: 'Hàng đã trả',
      content: <></>,
    },
    {
      key: EKeyOrderTab.RULES,
      title: 'Quy định',
      content: <Rules />,
    },
    {
      key: EKeyOrderTab.SEARCH,
      title: 'Tìm kiếm vận đơn',
      content: <></>,
    },
  ];

  return (
    <div className="Orders">
      <div className="Orders-tab">
        <Tabs dataTabs={dataTabs} />
      </div>

      <QuickOrderModal {...quickOrderModalState} onClose={handleCloseOrderModalState} />
    </div>
  );
};

export default Orders;

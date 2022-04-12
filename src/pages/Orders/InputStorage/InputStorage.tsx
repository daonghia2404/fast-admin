import React, { useState } from 'react';

import Table from '@/components/Table';
import { EEmpty } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';

import { TInputStorageProps } from './InputStorage.types';
import './InputStorage.scss';

const InputStorage: React.FC<TInputStorageProps> = () => {
  const [getParamsRequest, setGetParamsRequest] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const total = 24;

  const columns = [
    {
      key: 'index',
      title: 'STT',
      dataIndex: 'index',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'date',
      title: 'Ngày',
      dataIndex: 'date',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'id',
      title: 'Mã KH',
      dataIndex: 'id',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'orderId',
      title: 'Mã Vận Đơn',
      dataIndex: 'orderId',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'kg',
      title: 'Kg',
      dataIndex: 'kg',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'm3',
      title: 'M3',
      dataIndex: 'm3',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'money',
      title: 'Tiền',
      dataIndex: 'money',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'paid',
      title: 'Đã Thanh Toán',
      dataIndex: 'paid',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'unpaid',
      title: 'Chưa Thanh Toán',
      dataIndex: 'unpaid',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'debt',
      title: 'Công Nợ',
      dataIndex: 'debt',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
  ];

  return (
    <div className="InputStorage">
      <Table
        columns={columns}
        dataSources={[1, 2, 3, 4]}
        page={getParamsRequest.page}
        pageSize={getParamsRequest.pageSize}
        total={total}
      />
    </div>
  );
};

export default InputStorage;

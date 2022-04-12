import React, { useState } from 'react';

import Table from '@/components/Table';
import { EEmpty } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import BannerConfigModal from '@/containers/BannerConfigModal';

import { TBannersTableProps } from './BannersTable.types';
import './BannersTable.scss';

const BannersTable: React.FC<TBannersTableProps> = () => {
  const [getParamsRequest, setGetParamsRequest] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const [bannerConfigModalState, setBannerConfigModalState] = useState<{
    visible: boolean;
    data?: any;
  }>({
    visible: false,
  });

  const [bannersTableCheckedValue, setBannersTableCheckedValue] = useState<any>([]);

  const total = 24;

  const handleOpenBannerConfigModal = (): void => {
    setBannerConfigModalState({ visible: true });
  };
  const handleCloseBannerConfigModal = (): void => {
    setBannerConfigModalState({ visible: false });
  };

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'title',
      title: 'Tiêu đề',
      dataIndex: 'title',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'image',
      title: 'Hình ảnh',
      dataIndex: 'image',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'createdAt',
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'actions',
      title: 'Thao tác',
      dataIndex: 'actions',
      render: (): React.ReactElement => (
        <div className="Table-actions">
          <div className="Table-actions-item">
            <Button adminStyle className="violet" icon={<Icon name={EIconName.Plus} color={EIconColor.WHITE} />} />
          </div>
          <div className="Table-actions-item">
            <Button adminStyle type="primary" icon={<Icon name={EIconName.Pencil} color={EIconColor.WHITE} />} />
          </div>
          <div className="Table-actions-item">
            <Button adminStyle danger icon={<Icon name={EIconName.Trash} color={EIconColor.WHITE} />} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="BannersTable">
      <Table
        columns={columns}
        dataSources={[1, 2, 3, 4]}
        checkedValue={bannersTableCheckedValue}
        page={getParamsRequest.page}
        pageSize={getParamsRequest.pageSize}
        total={total}
      />

      <BannerConfigModal {...bannerConfigModalState} onClose={handleCloseBannerConfigModal} />
    </div>
  );
};

export default BannersTable;

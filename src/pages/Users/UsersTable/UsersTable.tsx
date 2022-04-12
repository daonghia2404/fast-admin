import React, { useState } from 'react';

import Table from '@/components/Table';
import { EEmpty } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import UserConfigModal from '@/containers/UserConfigModal';

import { TUsersTableProps } from './UsersTable.types';
import './UsersTable.scss';

const UsersTable: React.FC<TUsersTableProps> = () => {
  const [getParamsRequest, setGetParamsRequest] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const [userConfigModalState, setUserConfigModalState] = useState<{
    visible: boolean;
    data?: any;
  }>({
    visible: false,
  });

  const [usersTableCheckedValue, setUsersTableCheckedValue] = useState<any>([]);

  const total = 24;

  const handleOpenUserConfigModal = (): void => {
    setUserConfigModalState({ visible: true });
  };
  const handleCloseUserConfigModal = (): void => {
    setUserConfigModalState({ visible: false });
  };

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'group',
      title: 'Nhóm',
      dataIndex: 'group',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'name',
      title: 'Họ tên',
      dataIndex: 'name',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'phone',
      title: 'Số điện thoại',
      dataIndex: 'phone',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'line',
      title: EEmpty.TRIPLE_STRIKE_THROUGH,
      dataIndex: 'line',
      render: (): string => EEmpty.TRIPLE_STRIKE_THROUGH,
    },
    {
      key: 'gender',
      title: 'Giới tính',
      dataIndex: 'gender',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'status',
      title: 'Đã Thanh Toán',
      dataIndex: 'status',
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
    <div className="UsersTable">
      <Table
        columns={columns}
        dataSources={[1, 2, 3, 4]}
        checkedValue={usersTableCheckedValue}
        page={getParamsRequest.page}
        pageSize={getParamsRequest.pageSize}
        total={total}
      />

      <UserConfigModal {...userConfigModalState} onClose={handleCloseUserConfigModal} />
    </div>
  );
};

export default UsersTable;

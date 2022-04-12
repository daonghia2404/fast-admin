import React, { useState } from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Table from '@/components/Table';
import Button from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { EEmpty } from '@/common/enums';

import { TQuickOrderModalProps } from './QuickOrderModal.types';
import './QuickOrderModal.scss';

const QuickOrderModal: React.FC<TQuickOrderModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();
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
      key: 'storage',
      title: 'Nhập Kho',
      dataIndex: 'storage',
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
      key: 'note',
      title: 'Ghi Chú',
      dataIndex: 'note',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
  ];

  return (
    <Modal
      radius
      maxWidth="99.8rem"
      visible={visible}
      onClose={onClose}
      className="QuickOrderModal"
      wrapClassName="QuickOrderModal-wrapper"
    >
      <div className="QuickOrderModal-header flex justify-end">
        <Form form={form} className="flex items-center">
          <Form.Item name="keyword">
            <Input placeholder="Tìm kiếm" adminStyle />
          </Form.Item>
          <Form.Item>
            <Button icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} type="primary" />
          </Form.Item>
        </Form>
      </div>

      <div className="QuickOrderModal-table">
        <Table hideFooter hideHeader columns={columns} dataSources={[1, 2, 3, 4]} />
      </div>
    </Modal>
  );
};

export default QuickOrderModal;

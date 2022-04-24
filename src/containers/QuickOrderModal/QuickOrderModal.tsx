import React from 'react';

import Modal from '@/components/Modal';
import Table from '@/components/Table';
import { EEmpty, EFormatDate } from '@/common/enums';

import { TQuickOrderModalProps } from './QuickOrderModal.types';
import './QuickOrderModal.scss';
import { formatISODateToDateTime } from '@/utils/functions';

const QuickOrderModal: React.FC<TQuickOrderModalProps> = ({ visible, data, onClose }) => {
  const columns = [
    {
      key: 'depotName',
      title: 'Nhập Kho',
      dataIndex: 'depotName',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'date',
      title: 'Ngày',
      dataIndex: 'date',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'clientCode',
      title: 'Mã KH',
      dataIndex: 'clientCode',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'ladingCode',
      title: 'Mã Vận Đơn',
      dataIndex: 'ladingCode',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'kg',
      title: 'Kg',
      dataIndex: 'kg',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'note',
      title: 'Ghi Chú',
      dataIndex: 'note',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
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
      {/* <div className="QuickOrderModal-header flex justify-end">
        <Form form={form} className="flex items-center">
          <Form.Item name="keyword">
            <Input placeholder="Tìm kiếm" adminStyle />
          </Form.Item>
          <Form.Item>
            <Button icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} type="primary" />
          </Form.Item>
        </Form>
      </div> */}

      <div className="QuickOrderModal-table">
        <Table hideFooter hideHeader columns={columns} dataSources={data || []} />
      </div>
    </Modal>
  );
};

export default QuickOrderModal;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import Table from '@/components/Table';
import { EEmpty, EFormatDate } from '@/common/enums';
import { formatISODateToDateTime } from '@/utils/functions';
import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';
import { TRootState } from '@/redux/reducers';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { getDepotOrdersAction } from '@/redux/actions';

import { TQuickOrderModalProps } from './QuickOrderModal.types';
import './QuickOrderModal.scss';

const QuickOrderModal: React.FC<TQuickOrderModalProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const getDepotOrderLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EDepotControllerAction.GET_DEPOT_ORDERS],
  );
  const depotOrderSearchState = useSelector((state: TRootState) => state.depotReducer.depotOrders);

  const handleSearch = (values: any): void => {
    const ladingCode = values?.ladingCode;
    dispatch(getDepotOrdersAction.request(ladingCode));
  };

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
      key: 'status',
      title: 'Trạng thái',
      dataIndex: 'status',
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
      <div className="QuickOrderModal-header flex justify-between items-center">
        <div className="QuickOrderModal-header-title">Tra nhanh vận đơn</div>
        <Form form={form} className="flex items-center" onFinish={handleSearch}>
          <Form.Item name="ladingCode">
            <Input placeholder="Tra cứu nhanh mã VĐ" adminStyle />
          </Form.Item>
          <Form.Item>
            <Button
              icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />}
              type="primary"
              disabled={getDepotOrderLoading}
              htmlType="submit"
            />
          </Form.Item>
        </Form>
      </div>

      <div className="QuickOrderModal-table">
        <Table
          hideFooter
          hideHeader
          columns={columns}
          dataSources={depotOrderSearchState?.data || []}
          loading={getDepotOrderLoading}
        />
      </div>
    </Modal>
  );
};

export default QuickOrderModal;

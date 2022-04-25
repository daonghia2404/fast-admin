import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Table from '@/components/Table';
import { EEmpty, EFormatDate } from '@/common/enums';
import { formatISODateToDateTime } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';

import { TInputOrderSearchModalProps } from './InputOrderSearchModal.types';
import './InputOrderSearchModal.scss';

const InputOrderSearchModal: React.FC<TInputOrderSearchModalProps> = ({
  visible,
  pageIndex,
  pageSize,
  onPaginationChange,
  onClose,
}) => {
  const getOrderReturnSearchState = useSelector((state: TRootState) => state.depotReducer.depotOrdersReturnSearch);
  const getOrderReturnSearchTotal = useSelector(
    (state: TRootState) => state.depotReducer.depotOrdersReturnSearch?.data?.Total,
  );
  const getOrderReturnSearchLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EDepotControllerAction.GET_DEPOT_ORDERS_RETURN_SEARCH],
  );
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
      className="InputOrderSearchModal"
      wrapClassName="InputOrderSearchModal-wrapper"
    >
      {/* <div className="InputOrderSearchModal-header flex justify-end">
        <Form form={form} className="flex items-center">
          <Form.Item name="keyword">
            <Input placeholder="Tìm kiếm" adminStyle />
          </Form.Item>
          <Form.Item>
            <Button icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} type="primary" />
          </Form.Item>
        </Form>
      </div> */}

      <div className="InputOrderSearchModal-table">
        <Table
          hideHeader
          columns={columns}
          dataSources={getOrderReturnSearchState?.data?.Data || []}
          onPaginationChange={onPaginationChange}
          page={pageIndex}
          pageSize={pageSize}
          total={getOrderReturnSearchTotal}
          loading={getOrderReturnSearchLoading}
        />
      </div>
    </Modal>
  );
};

export default InputOrderSearchModal;

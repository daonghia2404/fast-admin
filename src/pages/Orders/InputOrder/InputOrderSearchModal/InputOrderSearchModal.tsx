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
      key: 'advanceMoney',
      title: 'Ứng',
      dataIndex: 'advanceMoney',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'm3',
      title: 'M3',
      dataIndex: 'm3',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'd1',
      title: 'D1',
      dataIndex: 'd1',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'd2',
      title: 'D2',
      dataIndex: 'd2',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'd3',
      title: 'D3',
      dataIndex: 'd3',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'price',
      title: 'Thành tiền',
      dataIndex: 'price',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'note',
      title: 'Ghi chú',
      dataIndex: 'note',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'payStatus',
      title: 'Trạng thái',
      dataIndex: 'payStatus',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'payDate',
      title: 'Ngày thanh toán',
      dataIndex: 'payDate',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
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

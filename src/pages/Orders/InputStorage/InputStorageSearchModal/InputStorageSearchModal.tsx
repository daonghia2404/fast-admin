import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Table from '@/components/Table';
import { EEmpty, EFormatDate } from '@/common/enums';
import { formatISODateToDateTime } from '@/utils/functions';

import { TInputStorageSearchModalProps } from './InputStorageSearchModal.types';
import './InputStorageSearchModal.scss';
import { TRootState } from '@/redux/reducers';
import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';

const InputStorageSearchModal: React.FC<TInputStorageSearchModalProps> = ({
  visible,
  pageIndex,
  pageSize,
  onPaginationChange,
  onClose,
}) => {
  const orderStorageSearchState = useSelector((state: TRootState) => state.depotReducer.depotStoragesSearch);
  const getOrderStorageSearchLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EDepotControllerAction.GET_DEPOT_STORAGES_SEARCH],
  );

  const columns = [
    {
      key: 'date',
      title: 'Ngày',
      dataIndex: 'date',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'depotName',
      title: 'Kho',
      dataIndex: 'depotName',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'clientCode',
      title: 'Mã KH',
      dataIndex: 'clientCode',
    },
    {
      key: 'ladingCode',
      title: 'Mã Vận Đơn',
      dataIndex: 'ladingCode',
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
      key: 'note',
      title: 'Ghi chú',
      dataIndex: 'note',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'status',
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'modifiedUser',
      title: 'Người thao tác',
      dataIndex: 'modifiedUser',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'modifiedDate',
      title: 'Ngày thao tác',
      dataIndex: 'modifiedDate',
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
      className="InputStorageSearchModal"
      wrapClassName="InputStorageSearchModal-wrapper"
    >
      {/* <div className="InputStorageSearchModal-header flex justify-end">
        <Form form={form} className="flex items-center">
          <Form.Item name="keyword">
            <Input placeholder="Tìm kiếm" adminStyle />
          </Form.Item>
          <Form.Item>
            <Button icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} type="primary" />
          </Form.Item>
        </Form>
      </div> */}

      <div className="InputStorageSearchModal-table">
        <Table
          hideHeader
          columns={columns}
          dataSources={orderStorageSearchState?.data?.Data || []}
          page={pageIndex}
          pageSize={pageSize}
          loading={getOrderStorageSearchLoading}
          total={orderStorageSearchState?.data?.Total}
          onPaginationChange={onPaginationChange}
        />
      </div>
    </Modal>
  );
};

export default InputStorageSearchModal;

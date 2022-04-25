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

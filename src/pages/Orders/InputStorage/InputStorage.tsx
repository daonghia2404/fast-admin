import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moment } from 'moment';

import Table from '@/components/Table';
import { EEmpty, EFormatDate } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, depotStatusOptions } from '@/common/constants';
import { TDepotStoragesResponse, TGetDepotStoresParams } from '@/services/api/depot-controller/types';
import { getDepotStoragesAction, getDepotStoragesSearchAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';
import Select, { TSelectOption } from '@/components/Select';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import DatePicker from '@/components/DatePicker';
import { formatISODateToDateTime } from '@/utils/functions';

import { TInputStorageProps } from './InputStorage.types';
import './InputStorage.scss';
import InputStorageSearchModal from '@/pages/Orders/InputStorage/InputStorageSearchModal';

const InputStorage: React.FC<TInputStorageProps> = () => {
  const dispatch = useDispatch();

  const [getParamsRequest, setGetParamsRequest] = useState<TGetDepotStoresParams & { date?: Moment }>({
    pageIndex: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    getCount: true,
  });
  const [filtersRenderValue, setFiltersRenderValue] = useState<{
    search?: string;
    status?: TSelectOption;
    date?: Moment;
  }>({
    search: undefined,
    status: undefined,
    date: undefined,
  });
  const [orderStorageSearchModalState, setOrderStorageSearchModalState] = useState<{
    visible: boolean;
    data?: TDepotStoragesResponse[];
    search?: string;
    status?: TSelectOption;
    date?: Moment;
    pageIndex?: number;
    pageSize?: number;
  }>({
    visible: false,
  });
  const depotStorages = useSelector((state: TRootState) => state.depotReducer.depotStorages);
  const getDepotStoragesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EDepotControllerAction.GET_DEPOT_STORAGES],
  );

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      pageIndex: page,
      pageSize: pageSize || getParamsRequest.pageSize,
    });
  };

  const handlePageSearchChange = (page: number, pageSize?: number): void => {
    setOrderStorageSearchModalState({
      ...orderStorageSearchModalState,
      pageIndex: page,
      pageSize: pageSize || getParamsRequest.pageSize,
    });
  };

  const handleReloadData = (): void => {
    setFiltersRenderValue({
      search: undefined,
      status: undefined,
      date: undefined,
    });
    setGetParamsRequest({ pageIndex: DEFAULT_PAGE, pageSize: DEFAULT_PAGE_SIZE, getCount: true });
  };

  const handleJumpingPage = (page: string): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      pageIndex: Number(page),
    });
  };

  const handleChangeFiltersRenderValue = (key: string, value: any): void => {
    setFiltersRenderValue({
      ...filtersRenderValue,
      [key]: value || undefined,
    });
  };

  const handleSearchSubmit = (): void => {
    setOrderStorageSearchModalState({
      ...orderStorageSearchModalState,
      visible: true,
      pageIndex: DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,
      ...filtersRenderValue,
    });
  };

  const handleCloseOrderStorageSearchModalState = (): void => {
    setOrderStorageSearchModalState({ visible: false });
  };

  const filtersRender = (): React.ReactNode => {
    return (
      <>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Chọn trạng thái"
            options={depotStatusOptions}
            value={filtersRenderValue.status}
            onChange={(option): void => handleChangeFiltersRenderValue('status', option)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <DatePicker
            placeholder="Chọn ngày"
            adminStyle
            value={filtersRenderValue.date}
            onChange={(value): void => handleChangeFiltersRenderValue('date', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Input
            placeholder="Tìm kiếm mã KH - mã VĐ"
            adminStyle
            value={filtersRenderValue.search}
            onChange={(value): void => handleChangeFiltersRenderValue('search', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Button
            icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />}
            type="primary"
            onClick={handleSearchSubmit}
          />
        </div>
      </>
    );
  };

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

  const getDepotStoragesData = useCallback(() => {
    dispatch(
      getDepotStoragesAction.request({
        ...getParamsRequest,
        status: getParamsRequest?.status?.value,
        day: getParamsRequest?.date ? getParamsRequest?.date.date() : undefined,
        month: getParamsRequest?.date ? getParamsRequest?.date.month() + 1 : undefined,
        year: getParamsRequest?.date ? getParamsRequest?.date.year() : undefined,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getParamsRequest]);

  const getDepotStoragesSearchData = useCallback(() => {
    if (orderStorageSearchModalState.visible) {
      dispatch(
        getDepotStoragesSearchAction.request({
          getCount: true,
          pageIndex: orderStorageSearchModalState.pageIndex || DEFAULT_PAGE,
          pageSize: orderStorageSearchModalState.pageSize || DEFAULT_PAGE_SIZE,
          search: orderStorageSearchModalState?.search,
          status: orderStorageSearchModalState?.status?.value,
          day: orderStorageSearchModalState?.date ? orderStorageSearchModalState?.date.date() : undefined,
          month: orderStorageSearchModalState?.date ? orderStorageSearchModalState?.date.month() + 1 : undefined,
          year: orderStorageSearchModalState?.date ? orderStorageSearchModalState?.date.year() : undefined,
        }),
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, orderStorageSearchModalState]);

  useEffect(() => {
    getDepotStoragesSearchData();
  }, [getDepotStoragesSearchData]);

  useEffect(() => {
    getDepotStoragesData();
  }, [getDepotStoragesData]);

  return (
    <div className="InputStorage">
      <Table
        rowKey="ladingCode"
        columns={columns}
        dataSources={depotStorages?.data?.Data || []}
        page={getParamsRequest.pageIndex}
        pageSize={getParamsRequest.pageSize}
        total={depotStorages?.data.Total}
        showOrder
        hideCreate
        loading={getDepotStoragesLoading}
        onPaginationChange={handlePageChange}
        onReload={handleReloadData}
        filtersRender={filtersRender()}
        onJumpingPage={handleJumpingPage}
      />

      <InputStorageSearchModal
        {...orderStorageSearchModalState}
        onClose={handleCloseOrderStorageSearchModalState}
        onPaginationChange={handlePageSearchChange}
      />
    </div>
  );
};

export default InputStorage;

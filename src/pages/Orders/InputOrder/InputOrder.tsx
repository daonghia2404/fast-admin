import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moment } from 'moment';

import Table from '@/components/Table';
import { EEmpty } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, depotStatusOptions } from '@/common/constants';
import { TGetDepotStoresParams } from '@/services/api/depot-controller/types';
import { TRootState } from '@/redux/reducers';
import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';
import Select, { TSelectOption } from '@/components/Select';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import DatePicker from '@/components/DatePicker';
import { getDepotOrdersReturnAction } from '@/redux/actions';

import { TInputOrderProps } from './InputOrder.types';
import './InputOrder.scss';
import { formatISODateToDateTime } from '@/utils/functions';

const InputOrder: React.FC<TInputOrderProps> = () => {
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
  const getDepotOrdersLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EDepotControllerAction.GET_DEPOT_ORDERS_RETURN],
  );
  const depotOrderState = useSelector((state: TRootState) => state.depotReducer.depotOrdersReturn);

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetParamsRequest({
      ...getParamsRequest,
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
    setGetParamsRequest({
      ...getParamsRequest,
      ...filtersRenderValue,
      pageIndex: DEFAULT_PAGE,
    });
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
      render: (value: string): string => (value ? formatISODateToDateTime(value, 'DD/MM/YYYY') : EEmpty.STRIKE_THROUGH),
    },
  ];

  const getDepotOrdersData = useCallback(() => {
    dispatch(
      getDepotOrdersReturnAction.request({
        ...getParamsRequest,
        status: getParamsRequest?.status?.value,
        day: getParamsRequest?.date ? getParamsRequest?.date.date() : undefined,
        month: getParamsRequest?.date ? getParamsRequest?.date.month() + 1 : undefined,
        year: getParamsRequest?.date ? getParamsRequest?.date.year() : undefined,
      }),
    );
  }, [dispatch, getParamsRequest]);

  useEffect(() => {
    getDepotOrdersData();
  }, [getDepotOrdersData]);

  return (
    <div className="InputOrder">
      <Table
        rowKey="ladingCode"
        columns={columns}
        dataSources={depotOrderState?.data?.Data || []}
        page={getParamsRequest.pageIndex}
        pageSize={getParamsRequest.pageSize}
        total={depotOrderState?.data?.Total}
        showOrder
        loading={getDepotOrdersLoading}
        onPaginationChange={handlePageChange}
        onReload={handleReloadData}
        filtersRender={filtersRender()}
        onJumpingPage={handleJumpingPage}
      />
    </div>
  );
};

export default InputOrder;

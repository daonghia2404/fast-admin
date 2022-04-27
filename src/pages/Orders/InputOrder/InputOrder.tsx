import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moment } from 'moment';
import { Form, Tooltip } from 'antd';

import Table from '@/components/Table';
import { EEmpty, EFormatDate } from '@/common/enums';
import {
  dataDayOptions,
  dataMonthOptions,
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  depotStatusPaymentOptions,
  LIMIT_DESCRIPTION_LENGTH,
} from '@/common/constants';
import { TGetDepotOrdersParams } from '@/services/api/depot-controller/types';
import { TRootState } from '@/redux/reducers';
import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';
import Select, { TSelectOption } from '@/components/Select';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import DatePicker from '@/components/DatePicker';
import { getDepotOrdersReturnAction } from '@/redux/actions';
import { formatISODateToDateTime, formatMoneyVND } from '@/utils/functions';

import { TInputOrderProps } from './InputOrder.types';
import './InputOrder.scss';

const InputOrder: React.FC<TInputOrderProps> = () => {
  const dispatch = useDispatch();

  const [getParamsRequest, setGetParamsRequest] = useState<
    TGetDepotOrdersParams & { isOpenModal?: boolean; day?: TSelectOption; month?: TSelectOption; year?: Moment }
  >({
    pageIndex: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    getCount: true,
  });
  const [filtersRenderValue, setFiltersRenderValue] = useState<{
    search?: string;
    status?: TSelectOption;
    day?: TSelectOption;
    month?: TSelectOption;
    year?: Moment;
  }>({
    search: undefined,
    status: undefined,
    day: undefined,
    month: undefined,
    year: undefined,
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
      day: undefined,
      month: undefined,
      year: undefined,
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
    const newFilterValue = {
      ...filtersRenderValue,
      [key]: value || undefined,
    };
    setFiltersRenderValue(newFilterValue);

    if (key !== 'search') {
      handleSearchSubmit(newFilterValue);
    }
  };

  const handleSearchSubmit = (newFilterValue?: any): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      ...(newFilterValue || filtersRenderValue),
      pageIndex: DEFAULT_PAGE,
    });
  };

  const filtersRender = (): React.ReactNode => {
    return (
      <Form className="flex items-center" onFinish={(): void => handleSearchSubmit()}>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Chọn trạng thái"
            options={depotStatusPaymentOptions}
            value={filtersRenderValue.status}
            onChange={(option): void => handleChangeFiltersRenderValue('status', option)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Chọn ngày"
            adminStyle
            value={filtersRenderValue.day}
            options={dataDayOptions}
            onChange={(value): void => handleChangeFiltersRenderValue('day', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Chọn tháng"
            adminStyle
            value={filtersRenderValue.month}
            options={dataMonthOptions}
            onChange={(value): void => handleChangeFiltersRenderValue('month', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <DatePicker
            placeholder="Chọn năm"
            picker="year"
            format="YYYY"
            adminStyle
            value={filtersRenderValue.year}
            onChange={(value): void => handleChangeFiltersRenderValue('year', value)}
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
          <Button icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} type="primary" htmlType="submit" />
        </div>
      </Form>
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
      key: 'dateReturned',
      title: 'Ngày trả',
      dataIndex: 'dateReturned',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'dateReceived',
      title: 'Ngày nhận',
      dataIndex: 'dateReceived',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'price',
      title: 'Thành tiền',
      dataIndex: 'price',
      render: (value: string): string => (value ? formatMoneyVND({ amount: value }) : EEmpty.STRIKE_THROUGH),
    },
    {
      key: 'note',
      title: 'Ghi chú',
      dataIndex: 'note',
      render: (value: string): React.ReactElement => {
        const isShowMore = value?.length > LIMIT_DESCRIPTION_LENGTH;
        if (value) {
          if (isShowMore) return <Tooltip title={value}>{value.substring(0, LIMIT_DESCRIPTION_LENGTH)}...</Tooltip>;

          return <>{value}</>;
        }

        return <>{EEmpty.STRIKE_THROUGH}</>;
      },
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

  const getDepotOrdersData = useCallback(() => {
    dispatch(
      getDepotOrdersReturnAction.request({
        ...getParamsRequest,
        status: getParamsRequest?.status?.value,
        day: getParamsRequest?.day?.value,
        month: getParamsRequest?.month?.value,
        year: getParamsRequest?.year ? getParamsRequest?.year.year() : undefined,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        hideCreate
        showTotalInfo
        m3={depotOrderState?.data.M3}
        kg={depotOrderState?.data.Kg}
        advanceMoney={depotOrderState?.data.AdvanceMoney}
        grossMoney={depotOrderState?.data.GrossMoney}
        loading={getDepotOrdersLoading}
        onPaginationChange={handlePageChange}
        onReload={handleReloadData}
        filtersRender={filtersRender()}
        onJumpingPage={handleJumpingPage}
        quickSearchLadingCode
      />
    </div>
  );
};

export default InputOrder;

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
      status: depotStatusPaymentOptions[0],
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
            placeholder="Tr???ng th??i"
            defaultValue={depotStatusPaymentOptions[0]}
            options={depotStatusPaymentOptions}
            value={filtersRenderValue.status}
            allowClear={false}
            onChange={(option): void => handleChangeFiltersRenderValue('status', option)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Ng??y"
            adminStyle
            value={filtersRenderValue.day}
            options={dataDayOptions}
            onChange={(value): void => handleChangeFiltersRenderValue('day', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Select
            placeholder="Th??ng"
            adminStyle
            value={filtersRenderValue.month}
            options={dataMonthOptions}
            onChange={(value): void => handleChangeFiltersRenderValue('month', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <DatePicker
            placeholder="N??m"
            picker="year"
            format="YYYY"
            adminStyle
            value={filtersRenderValue.year}
            onChange={(value): void => handleChangeFiltersRenderValue('year', value)}
          />
        </div>
        <div className="Table-main-header-item-control">
          <Input
            placeholder="T??m ki???m m?? KH - m?? V??"
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
      key: 'dateReturned',
      title: 'Ng??y tr???',
      className: 'nowrap',
      dataIndex: 'dateReturned',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'dateReceived',
      title: 'Ng??y nh???n',
      className: 'nowrap',
      dataIndex: 'dateReceived',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'clientCode',
      title: 'M?? KH',
      className: 'nowrap',
      dataIndex: 'clientCode',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'ladingCode',
      title: 'M?? V???n ????n',
      className: 'nowrap',
      dataIndex: 'ladingCode',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'kg',
      title: 'Kg',
      className: 'nowrap',
      dataIndex: 'kg',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'advanceMoney',
      title: '???ng',
      className: 'nowrap',
      dataIndex: 'advanceMoney',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'm3',
      title: 'M3',
      className: 'nowrap',
      dataIndex: 'm3',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'd1',
      title: 'D1',
      className: 'nowrap',
      dataIndex: 'd1',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'd2',
      title: 'D2',
      className: 'nowrap',
      dataIndex: 'd2',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'd3',
      title: 'D3',
      className: 'nowrap',
      dataIndex: 'd3',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'price',
      title: '????n gi??',
      className: 'nowrap',
      dataIndex: 'price',
      render: (value: string): string => (value ? formatMoneyVND({ amount: value }) : EEmpty.STRIKE_THROUGH),
    },
    {
      key: 'money',
      title: 'Th??nh ti???n',
      className: 'nowrap',
      dataIndex: 'money',
      render: (value: string): string => (value ? formatMoneyVND({ amount: value }) : EEmpty.STRIKE_THROUGH),
    },
    {
      key: 'note',
      title: 'Ghi ch??',
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
      title: 'Tr???ng th??i',
      className: 'nowrap',
      dataIndex: 'payStatus',
      render: (): string => EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'payDate',
      title: 'Ng??y thanh to??n',
      dataIndex: 'payDate',
      className: 'nowrap',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
  ];

  const getDepotOrdersData = useCallback(() => {
    dispatch(
      getDepotOrdersReturnAction.request({
        ...getParamsRequest,
        status: getParamsRequest?.status?.value || undefined,
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

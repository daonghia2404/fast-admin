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
  depotStatusDeliveryOptions,
  LIMIT_DESCRIPTION_LENGTH,
} from '@/common/constants';
import { TGetDepotStoresParams } from '@/services/api/depot-controller/types';
import { getDepotStoragesAction } from '@/redux/actions';
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

  const handleReloadData = (): void => {
    setFiltersRenderValue({
      search: undefined,
      status: depotStatusDeliveryOptions[0],
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
            defaultValue={depotStatusDeliveryOptions[0]}
            options={depotStatusDeliveryOptions}
            allowClear={false}
            value={filtersRenderValue.status}
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
            adminStyle
            format="YYYY"
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
      key: 'date',
      title: 'Ng??y',
      dataIndex: 'date',
      className: 'nowrap',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'depotName',
      className: 'nowrap',
      title: 'Kho',
      dataIndex: 'depotName',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'clientCode',
      title: 'M?? KH',
      className: 'nowrap',
      dataIndex: 'clientCode',
    },
    {
      key: 'ladingCode',
      title: 'M?? V???n ????n',
      className: 'nowrap',
      dataIndex: 'ladingCode',
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
      key: 'status',
      title: 'Tr???ng th??i',
      className: 'nowrap',
      dataIndex: 'status',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'modifiedUser',
      title: 'NV thao t??c',
      className: 'nowrap',
      dataIndex: 'modifiedUser',
      render: (value: string): string => value || EEmpty.STRIKE_THROUGH,
    },
    {
      key: 'modifiedDate',
      title: 'Ng??y thao t??c',
      className: 'nowrap',
      dataIndex: 'modifiedDate',
      render: (value: string): string =>
        value ? formatISODateToDateTime(value, EFormatDate.COMMON) : EEmpty.STRIKE_THROUGH,
    },
  ];

  const getDepotStoragesData = useCallback(() => {
    dispatch(
      getDepotStoragesAction.request({
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
        showTotalInfo
        m3={depotStorages?.data.M3}
        kg={depotStorages?.data.Kg}
        loading={getDepotStoragesLoading}
        onPaginationChange={handlePageChange}
        onReload={handleReloadData}
        filtersRender={filtersRender()}
        quickSearchLadingCode
        onJumpingPage={handleJumpingPage}
      />
    </div>
  );
};

export default InputStorage;

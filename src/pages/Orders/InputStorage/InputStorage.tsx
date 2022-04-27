import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moment } from 'moment';
import { Form } from 'antd';

import Table from '@/components/Table';
import { EEmpty, EFormatDate } from '@/common/enums';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, depotStatusOptions } from '@/common/constants';
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
    date?: Moment;
  }>({
    search: undefined,
    status: undefined,
    date: undefined,
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
      pageIndex: DEFAULT_PAGE,
      ...filtersRenderValue,
    });
  };

  const filtersRender = (): React.ReactNode => {
    return (
      <Form className="flex items-center" onFinish={handleSearchSubmit}>
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
          <Button icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} type="primary" htmlType="submit" />
        </div>
      </Form>
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

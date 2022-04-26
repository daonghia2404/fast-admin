import React, { useState } from 'react';
import classNames from 'classnames';
import { Table as AntdTable } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { TTableProps } from './Table.types';
import Pagination from '@/components/Pagination';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TDepotOrderResponse } from '@/services/api/depot-controller/types';
import { getDepotOrdersAction } from '@/redux/actions';
import QuickOrderModal from '@/containers/QuickOrderModal';
import { EDepotControllerAction } from '@/redux/actions/depot-controller/constants';
import { TRootState } from '@/redux/reducers';
import { formatMoneyVND, showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

import './Table.scss';

export const Table: React.FC<TTableProps> = ({
  className,
  page,
  pageSize,
  total,
  columns,
  dataSources,
  loading,
  rowKey,
  showOrder,
  checkedValue,
  hideHeader,
  hideFooter,
  hideCreate,
  filtersRender,
  quickSearchLadingCode,
  showTotalInfo,
  advanceMoney,
  grossMoney,
  kg,
  m3,
  onDeletes,
  onCheckboxChange,
  onReload,
  title,
  onPaginationChange,
  onAdd,
}) => {
  const dispatch = useDispatch();
  // const [jumpingPage, setJumpingPage] = useState<string>('');
  // const pageSizeValue = dataOptionsPageSize.find((option) => Number(option.value) === pageSize);

  const [ladingCode, setLadingCode] = useState<string>('');
  const getDepotOrderLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EDepotControllerAction.GET_DEPOT_ORDERS],
  );

  const [quickOrderModalState, setQuickOrderModalState] = useState<{
    visible: boolean;
    data?: TDepotOrderResponse[];
  }>({
    visible: false,
  });

  const renderColumns = showOrder
    ? [
        {
          key: 'stt',
          dataIndex: 'stt',
          title: 'STT',
          render: (_: string, record: any, index: number): number => index + 1 + ((page || 0) - 1) * (pageSize || 0),
        },
        ...columns,
      ]
    : columns;

  const handleSubmitSearchByLadingCode = (): void => {
    if (ladingCode) {
      dispatch(getDepotOrdersAction.request(ladingCode, handleOpenOrderModalState));
    } else {
      showNotification(ETypeNotification.ERROR, 'Vui lòng nhập mã vận đơn muốn tìm kiếm');
    }
  };

  const handleOpenOrderModalState = (): void => {
    setQuickOrderModalState({ visible: true });
  };

  const handleCloseOrderModalState = (): void => {
    setQuickOrderModalState({ visible: false });
  };

  const handleReload = (): void => {
    setLadingCode('');
    onReload?.();
  };

  // const handlePageSizeChange = (option: TSelectOption | null): void => {
  //   if (option?.value) onPaginationChange?.(page || DEFAULT_PAGE, Number(option.value));
  // };

  // const handleChangeJumpingPage = (value: string): void => {
  //   setJumpingPage(value);
  // };

  return (
    <div className={classNames('Table', className)}>
      {!hideHeader && (
        <div className="Table-main-header flex-wrap flex items-center justify-between">
          <div className="Table-main-header-item flex items-center">
            <div className="Table-main-header-item-control">
              <Button
                icon={<Icon name={EIconName.Reload} color={EIconColor.WHITE} />}
                className="black"
                adminStyle
                onClick={handleReload}
              />
            </div>
            {!hideCreate && (
              <div className="Table-main-header-item-control">
                <Button
                  icon={<Icon name={EIconName.Pencil} color={EIconColor.WHITE} />}
                  type="primary"
                  title="Thêm mới"
                  reverse
                  adminStyle
                  onClick={onAdd}
                />
              </div>
            )}

            {quickSearchLadingCode && (
              <>
                <div className="Table-main-header-item-control">
                  <Input placeholder="Tra cứu nhanh mã VĐ" adminStyle value={ladingCode} onChange={setLadingCode} />
                </div>
                <div className="Table-main-header-item-control">
                  <Button
                    icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />}
                    type="primary"
                    onClick={handleSubmitSearchByLadingCode}
                    disabled={getDepotOrderLoading}
                  />
                </div>
              </>
            )}

            {checkedValue && checkedValue.length > 0 && (
              <div className="Table-main-header-item-control">
                <Button
                  icon={<Icon name={EIconName.Trash} color={EIconColor.WHITE} />}
                  danger
                  title="Xoá được chọn"
                  reverse
                  adminStyle
                  onClick={onDeletes}
                />
              </div>
            )}

            {/* <div className="Table-main-header-item-control">
              <Button
                icon={<Icon name={EIconName.SettingCheck} color={EIconColor.WHITE} />}
                className="black"
                title="Thiết lập"
                reverse
                adminStyle
              />
            </div> */}
          </div>
          <div className="Table-main-header-item flex items-center">
            {/* <div className="Table-main-header-item-control">
              <DatePicker placeholder="Chọn ngày" adminStyle />
            </div>
            <div className="Table-main-header-item-control">
              <DropdownCustom overlay={<></>}>
                <Button
                  adminStyle
                  title={<Icon name={EIconName.Filter} />}
                  icon={<Icon name={EIconName.CaretDown} />}
                />
              </DropdownCustom>
            </div> */}

            {filtersRender}
          </div>
        </div>
      )}

      <div className="Table-main-body">
        <AntdTable
          pagination={false}
          columns={renderColumns}
          dataSource={dataSources}
          loading={loading}
          rowKey={rowKey}
          bordered
          locale={{
            emptyText: 'KHÔNG CÓ DỮ LIỆU',
          }}
          rowSelection={
            checkedValue
              ? {
                  type: 'checkbox',
                  onChange: (selectedRowKeys: React.Key[], selectedRows: any[]): void => {
                    onCheckboxChange?.(selectedRowKeys, selectedRows);
                  },
                  getCheckboxProps: (record: any): any => ({
                    checked: checkedValue?.map((item) => item?.[`${rowKey}`]).includes(record?.[`${rowKey}`]),
                  }),
                }
              : undefined
          }
          scroll={{ x: 'scroll' }}
          title={title}
        />
      </div>

      {!hideFooter && (
        <div className="Table-main-footer flex items-center justify-between">
          <div className="Table-main-footer-item flex items-center">
            {/* Hiển thị số dòng trên 1 trang
            <Select
              allowClear={false}
              options={dataOptionsPageSize}
              onChange={handlePageSizeChange}
              value={pageSizeValue}
            /> */}
            {showTotalInfo && (
              <>
                {grossMoney && (
                  <div className="Table-main-footer-item-info blue">
                    Tổng tiền: {formatMoneyVND({ amount: grossMoney || 0, showSuffix: true })}
                  </div>
                )}
                <div className={classNames('Table-main-footer-item-info', { red: !grossMoney })}>Tổng mã: {total}</div>
                <div className="Table-main-footer-item-info">Tổng Kg: {kg}</div>
                <div className="Table-main-footer-item-info">Tổng m3: {m3}</div>
                {advanceMoney && (
                  <div className="Table-main-footer-item-info red">
                    Tổng ứng: {formatMoneyVND({ amount: advanceMoney || 0, showSuffix: true })}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="Table-main-footer-item flex items-center">
            {page && pageSize && Boolean(total) && (
              <Pagination page={page} pageSize={pageSize} total={total || 0} onChange={onPaginationChange} />
            )}
            <div className="Table-main-footer-item-goto flex items-center">
              {/* <Input value={jumpingPage} adminStyle numberOnly notZero onChange={handleChangeJumpingPage} />
              <Button
                title="Đi đến"
                adminStyle
                onClick={(): void => {
                  jumpingPage && onJumpingPage?.(jumpingPage);
                }}
              /> */}
            </div>
          </div>
        </div>
      )}

      <QuickOrderModal {...quickOrderModalState} onClose={handleCloseOrderModalState} />
    </div>
  );
};

export default Table;

import React, { useState } from 'react';
import classNames from 'classnames';
import { Table as AntdTable } from 'antd';

import { dataOptionsPageSize, DEFAULT_PAGE } from '@/common/constants';
import { TTableProps } from './Table.types';
import Pagination from '@/components/Pagination';
import Select, { TSelectOption } from '@/components/Select';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

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
  filtersRender,
  onDeletes,
  onCheckboxChange,
  onJumpingPage,
  onReload,
  title,
  onPaginationChange,
  onAdd,
}) => {
  const [jumpingPage, setJumpingPage] = useState<string>('');
  const pageSizeValue = dataOptionsPageSize.find((option) => Number(option.value) === pageSize);

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

  const handlePageSizeChange = (option: TSelectOption | null): void => {
    if (option?.value) onPaginationChange?.(page || DEFAULT_PAGE, Number(option.value));
  };

  const handleChangeJumpingPage = (value: string): void => {
    setJumpingPage(value);
  };

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
                onClick={onReload}
              />
            </div>
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
            Hiển thị số dòng trên 1 trang
            <Select
              allowClear={false}
              options={dataOptionsPageSize}
              onChange={handlePageSizeChange}
              value={pageSizeValue}
            />
          </div>

          <div className="Table-main-footer-item flex items-center">
            {page && pageSize && Boolean(total) && (
              <Pagination page={page} pageSize={pageSize} total={total || 0} onChange={onPaginationChange} />
            )}
            <div className="Table-main-footer-item-goto flex items-center">
              <Input value={jumpingPage} adminStyle numberOnly notZero onChange={handleChangeJumpingPage} />
              <Button
                title="Đi đến"
                adminStyle
                onClick={(): void => {
                  jumpingPage && onJumpingPage?.(jumpingPage);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

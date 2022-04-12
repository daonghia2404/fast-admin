import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Table as AntdTable } from 'antd';

import { TIMEOUT_DEBOUNCE } from '@/common/enums';
import { useDebounce } from '@/utils/hooks';
import { dataOptionsPageSize, DEFAULT_PAGE } from '@/common/constants';
import { TTableProps } from './Table.types';
import Pagination from '@/components/Pagination';
import Select, { TSelectOption } from '@/components/Select';

import './Table.scss';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import DatePicker from '@/components/DatePicker';
import DropdownCustom from '@/components/DropdownCustom';

export const Table: React.FC<TTableProps> = ({
  className,
  page,
  pageSize,
  total,
  columns,
  dataSources,
  loading,
  rowKey,
  hideHeader,
  hideFooter,
  title,
  onPaginationChange,
  onSearch,
}) => {
  const [keyword, setKeyWord] = useState<string>('');
  const [isFirstFetching, setIsFirstFetching] = useState<boolean>(true);
  const pageSizeValue = dataOptionsPageSize.find((option) => Number(option.value) === pageSize);
  const searchDebounceValue = useDebounce(keyword, TIMEOUT_DEBOUNCE.search);

  const handlePageSizeChange = (option: TSelectOption | null): void => {
    if (option?.value) onPaginationChange?.(page || DEFAULT_PAGE, Number(option.value));
  };

  useEffect(() => {
    if (!isFirstFetching) onSearch?.(searchDebounceValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchDebounceValue]);

  useEffect(() => {
    setIsFirstFetching(false);
  }, []);

  return (
    <div className={classNames('Table', className)}>
      {!hideHeader && (
        <div className="Table-main-header flex-wrap flex items-center justify-between">
          <div className="Table-main-header-item flex items-center">
            <div className="Table-main-header-item-control">
              <Button icon={<Icon name={EIconName.Reload} color={EIconColor.WHITE} />} className="black" adminStyle />
            </div>
            <div className="Table-main-header-item-control">
              <Button
                icon={<Icon name={EIconName.Pencil} color={EIconColor.WHITE} />}
                type="primary"
                title="Thêm mới"
                reverse
                adminStyle
              />
            </div>
            <div className="Table-main-header-item-control">
              <Button
                icon={<Icon name={EIconName.Trash} color={EIconColor.WHITE} />}
                danger
                title="Xoá được chọn"
                reverse
                adminStyle
              />
            </div>
            <div className="Table-main-header-item-control">
              <Button
                icon={<Icon name={EIconName.SettingCheck} color={EIconColor.WHITE} />}
                className="black"
                title="Thiết lập"
                reverse
                adminStyle
              />
            </div>
          </div>
          <div className="Table-main-header-item flex items-center">
            <div className="Table-main-header-item-control">
              <Input placeholder="Mã KH/ Mã VĐ" adminStyle />
            </div>
            <div className="Table-main-header-item-control">
              <Select placeholder="Chọn kho" options={[]} />
            </div>
            <div className="Table-main-header-item-control">
              <Input placeholder="Tìm kiếm" adminStyle />
            </div>
            <div className="Table-main-header-item-control">
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
            </div>
            <div className="Table-main-header-item-control">
              <Button icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} type="primary" />
            </div>
          </div>
        </div>
      )}

      <div className="Table-main-body">
        <AntdTable
          pagination={false}
          columns={columns}
          dataSource={dataSources}
          loading={loading}
          rowKey={rowKey}
          bordered
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
              defaultValue={dataOptionsPageSize[0]}
              onChange={handlePageSizeChange}
              value={pageSizeValue}
            />
          </div>
          {page && pageSize && total && (
            <div className="Table-main-footer-item">
              <Pagination page={page} pageSize={pageSize} total={total} onChange={onPaginationChange} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;

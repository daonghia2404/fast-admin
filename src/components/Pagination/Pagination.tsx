import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import classNames from 'classnames';

import { TPaginationProps } from './Pagination.types';

import './Pagination.scss';

export const Pagination: React.FC<TPaginationProps> = ({ page, pageSize, total, className, onChange }) => {
  const itemRender = (current: number, type: string, originalElement: React.ReactNode): React.ReactNode => {
    if (type === 'prev') {
      return <div className="Pagination-first">Trang đầu</div>;
    }
    if (type === 'next') {
      return <div className="Pagination-last">Trang cuối</div>;
    }
    return originalElement;
  };
  return (
    <div className={classNames('Pagination', className)}>
      <AntdPagination
        current={page}
        pageSize={pageSize}
        itemRender={itemRender}
        total={total}
        hideOnSinglePage
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;

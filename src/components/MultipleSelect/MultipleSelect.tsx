import React from 'react';
import { Select as AntdSelect } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { searchString } from '@/utils/functions';

import { TMultipleSelectProps } from './MultipleSelect.types';
import './MultipleSelect.scss';

const MultipleSelect: React.FC<TMultipleSelectProps> = ({
  placeholder,
  disabled,
  allowClear = true,
  options = [],
  defaultValue,
  dropdownClassName,
  size,
  adminStyle,
  open,
  showSearch = true,
  value,
  onChange,
}) => {
  const filterOption = (input: string, option: any): boolean => {
    return searchString(option.label || '', input);
  };

  return (
    <div className={classNames('MultipleSelect', { 'admin-style': adminStyle })}>
      <AntdSelect
        mode="multiple"
        allowClear={allowClear}
        showSearch={showSearch}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
        size={size}
        filterOption={filterOption}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        open={open}
        dropdownClassName={classNames('MultipleSelect-dropdown', dropdownClassName)}
        labelInValue
        suffixIcon={<Icon name={EIconName.CaretDown} color={EIconColor.SHARK} />}
        notFoundContent="Không tìm thấy dữ liệu"
      />
    </div>
  );
};

export default MultipleSelect;

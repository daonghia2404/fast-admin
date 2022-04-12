import React from 'react';
import { Select as AntdSelect } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { searchString } from '@/utils/functions';

import { TSelectProps } from './Select.types';
import './Select.scss';

const Select: React.FC<TSelectProps> = ({
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
    <div className={classNames('Select', { 'admin-style': adminStyle })}>
      <AntdSelect
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
        dropdownClassName={classNames('Select-dropdown', dropdownClassName)}
        labelInValue
        suffixIcon={<Icon name={EIconName.CaretDown} color={EIconColor.SHARK} />}
        notFoundContent="Không tìm thấy dữ liệu"
      />
    </div>
  );
};

export default Select;

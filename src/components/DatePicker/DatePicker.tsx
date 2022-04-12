import React from 'react';
import { Moment } from 'moment';
import classNames from 'classnames';
import { DatePicker as AntdDatePicker } from 'antd';

import { TDatePickerProps } from './DatePicker.types';
import Icon, { EIconName } from '@/components/Icon';

import './DatePicker.scss';

const DatePicker: React.FC<TDatePickerProps> = ({ className, adminStyle, dropdownClassName, onChange, ...rest }) => {
  const handleChange = (value: Moment | null, valueString: string | null): void => {
    onChange?.(value, valueString);
  };

  return (
    <div className={classNames('DatePicker', { 'admin-style': adminStyle })}>
      <AntdDatePicker
        {...rest}
        dropdownClassName={classNames('DatePicker-dropdown', dropdownClassName)}
        onChange={handleChange}
        suffixIcon={<Icon name={EIconName.CalendarGrid} />}
      />
    </div>
  );
};

export default DatePicker;

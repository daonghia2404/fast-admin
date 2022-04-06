import React from 'react';
import { Moment } from 'moment';
import { DatePicker as AntdDatePicker } from 'antd';

import { TDatePickerProps } from './DatePicker.types';

import './DatePicker.scss';

const DatePicker: React.FC<TDatePickerProps> = ({ className, onChange, ...rest }) => {
  const handleChange = (value: Moment | null, valueString: string | null): void => {
    onChange?.(value, valueString);
  };

  return (
    <div className="DatePicker">
      <AntdDatePicker {...rest} onChange={handleChange} />
    </div>
  );
};

export default DatePicker;

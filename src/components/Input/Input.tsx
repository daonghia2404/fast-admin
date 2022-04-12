import React from 'react';
import { Input as AntdInput } from 'antd';
import classNames from 'classnames';
import { regex } from '@/common/constants';

import { TInputProps } from './Input.types';

import './Input.scss';

const Input: React.FC<TInputProps> = ({ className, adminStyle, style, numberOnly, onChange, ...rest }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value: currentValue } = e.target;

    if (numberOnly) {
      const isInputNumber = regex.numeric.test(currentValue);
      isInputNumber && onChange?.(currentValue);
    } else {
      onChange?.(currentValue);
    }
  };

  return (
    <div className={classNames('Input', { 'admin-style': adminStyle })} style={style}>
      <AntdInput {...rest} onChange={handleChange} />
    </div>
  );
};

export default Input;

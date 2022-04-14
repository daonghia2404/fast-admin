import React from 'react';
import { Input as AntdInput } from 'antd';
import classNames from 'classnames';
import { regex } from '@/common/constants';

import { TInputProps } from './Input.types';

import './Input.scss';

const Input: React.FC<TInputProps> = ({ className, adminStyle, style, notZero, numberOnly, onChange, ...rest }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value: currentValue } = e.target;

    if (numberOnly) {
      const isInputNumber = regex.numeric.test(currentValue);
      if (
        (!currentValue && typeof currentValue !== 'number') ||
        (isInputNumber && notZero && Number(currentValue) > 0)
      ) {
        onChange?.(currentValue);
      } else if (!currentValue && isInputNumber && !notZero) {
        onChange?.(currentValue);
      }
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

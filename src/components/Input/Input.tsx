import React from 'react';
import { Input as AntdInput } from 'antd';

import { TInputProps } from './Input.types';

import './Input.scss';

const Input: React.FC<TInputProps> = ({ className, onChange, ...rest }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value: currentValue } = e.target;
    onChange?.(currentValue);
  };

  return (
    <div className="Input">
      <AntdInput {...rest} onChange={handleChange} />
    </div>
  );
};

export default Input;

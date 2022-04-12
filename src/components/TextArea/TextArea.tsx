import React from 'react';
import classNames from 'classnames';
import { Input } from 'antd';

import { TTextAreaProps } from './TextArea.types';

import './TextArea.scss';

const { TextArea: AntdTextArea } = Input;

const TextArea: React.FC<TTextAreaProps> = ({ disabled, className, adminStyle, placeholder, value, onChange }) => {
  return (
    <div className={classNames('TextArea', className, { 'admin-style': adminStyle })}>
      <AntdTextArea
        className="TextArea-control"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;

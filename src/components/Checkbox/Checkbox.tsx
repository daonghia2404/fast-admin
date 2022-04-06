import React from 'react';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import classNames from 'classnames';
import { Checkbox as AntCheckbox } from 'antd';

import { TCheckboxProps } from './Checkbox.types';
import './Checkbox.scss';

const Checkbox: React.FC<TCheckboxProps> = ({ label, className, value, onChange }) => {
  const handleChange = (e: CheckboxChangeEvent): void => {
    const { checked } = e.target;
    onChange?.(checked);
  };

  return (
    <div className={classNames('Checkbox', className)}>
      <AntCheckbox checked={Boolean(value)} onChange={handleChange}>
        {label}
      </AntCheckbox>
    </div>
  );
};

export default Checkbox;

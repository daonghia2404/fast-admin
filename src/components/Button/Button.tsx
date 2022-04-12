import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import { TButtonProps } from '@/components/Button/Button.types';

import './Button.scss';

const Button: React.FC<TButtonProps> = ({
  className,
  adminStyle,
  title,
  icon,
  uppercase,
  reverse,
  link,
  onClick,
  ...rest
}) => {
  const handleClick = (): void => {
    if (link) navigate(link);
    else onClick?.();
  };
  return (
    <div
      className={classNames(
        'Button',
        className,
        { uppercase },
        { 'only-icon': !title && icon },
        { 'admin-style': adminStyle },
        { reverse },
      )}
    >
      <AntdButton {...rest} onClick={handleClick}>
        {title}
        {icon && <div className="Button-icon">{icon}</div>}
      </AntdButton>
    </div>
  );
};

export default Button;

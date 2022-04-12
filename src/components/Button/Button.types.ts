import React from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TButtonProps = {
  className?: string;
  title?: string | React.ReactNode;
  size?: SizeType;
  adminStyle?: boolean;
  link?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  uppercase?: boolean;
  danger?: boolean;
  disabled?: boolean;
  reverse?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};

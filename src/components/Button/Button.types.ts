import React from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TButtonProps = {
  className?: string;
  title?: string;
  size?: SizeType;
  link?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  uppercase?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};

import { CSSProperties } from 'react';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TInputProps = {
  className?: string;
  size?: SizeType;
  type?: 'text' | 'password';
  placeholder?: string;
  adminStyle?: boolean;
  numberOnly?: boolean;
  style?: CSSProperties;
  value?: string;
  onChange?: (value: string) => void;
};

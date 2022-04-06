import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TInputProps = {
  className?: string;
  size?: SizeType;
  type?: 'text' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

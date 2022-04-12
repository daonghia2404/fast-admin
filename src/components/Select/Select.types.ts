import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TSelectProps = {
  className?: string;
  placeholder?: string;
  value?: TSelectOption;
  defaultValue?: TSelectOption;
  options?: TSelectOption[];
  showSearch?: boolean;
  disabled?: boolean;
  open?: boolean;
  size?: SizeType;
  adminStyle?: boolean;
  dropdownClassName?: string;
  allowClear?: boolean;
  onChange?: (option: TSelectOption) => void;
};

export type TSelectOption = {
  label: string;
  value: string;
  data?: any;
  disabled?: boolean;
};

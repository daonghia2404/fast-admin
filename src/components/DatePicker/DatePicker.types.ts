import { Moment } from 'moment';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TDatePickerProps = {
  className?: string;
  size?: SizeType;
  format?: string;
  adminStyle?: boolean;
  placeholder?: string;
  dropdownClassName?: string;
  picker?: 'month' | 'year' | 'date' | 'time' | 'week' | 'quarter';
  value?: Moment | null;
  allowClear?: boolean;
  onChange?: (value: Moment | null, valueString: string | null) => void;
};

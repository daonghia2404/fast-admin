import { Moment } from 'moment';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TDatePickerProps = {
  className?: string;
  size?: SizeType;
  placeholder?: string;
  value?: Moment | null;
  allowClear?: boolean;
  onChange?: (value: Moment | null, valueString: string | null) => void;
};

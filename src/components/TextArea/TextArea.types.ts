import { ChangeEvent } from 'react';

export type TTextAreaProps = {
  className?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  adminStyle?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

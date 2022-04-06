import React from 'react';

export type TCheckboxProps = {
  className?: string;
  value?: string;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
};

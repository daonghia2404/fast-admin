import React from 'react';

export type TDropdownCustomProps = {
  className?: string;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  overlay: React.ReactElement;
  overlayClassName?: string;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
};

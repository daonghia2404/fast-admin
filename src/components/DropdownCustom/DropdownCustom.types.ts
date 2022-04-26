import React from 'react';

export type TDropdownCustomProps = {
  className?: string;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  overlay: React.ReactElement;
  overlayClassName?: string;
  visible?: boolean;
  placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'top' | 'bottom';
  getPopupContainer?: (trigger: any) => any;
  onVisibleChange?: (visible: boolean) => void;
};

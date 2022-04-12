import React from 'react';

export type TTabsProps = {
  className?: string;
  onChange?: () => void;
  defaultActiveKey?: string;
  dataTabs?: TTabItem[];
};

export type TTabItem = {
  title: string;
  key: string;
  content: React.ReactNode;
};

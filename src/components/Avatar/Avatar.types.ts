import { TooltipPlacement } from 'antd/lib/tooltip';
import { CSSProperties } from 'react';

export type TAvatarProps = {
  className?: string;
  placement?: TooltipPlacement;
  tooltipContent?: string;
  image?: string | null;
  size?: number;
  fullname?: string;
  forceContent?: string;
  style?: CSSProperties;
  onClickAvatar?: () => void;
};

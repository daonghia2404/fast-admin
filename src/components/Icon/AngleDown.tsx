import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.74416 4.30484C1.45833 4.59068 1.45833 5.05151 1.74416 5.33734L6.59166 10.1848C6.81916 10.4123 7.18666 10.4123 7.41416 10.1848L12.2617 5.33734C12.5475 5.05151 12.5475 4.59068 12.2617 4.30484C11.9758 4.01901 11.515 4.01901 11.2292 4.30484L6.99999 8.52818L2.77083 4.29901C2.49083 4.01901 2.02416 4.01901 1.74416 4.30484Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

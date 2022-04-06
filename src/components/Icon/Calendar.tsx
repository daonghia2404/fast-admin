import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.8 4.1999H22.4V6.9999H18.2V4.1999H9.79999V6.9999H5.59999V4.1999H4.19999C2.65859 4.1999 1.39999 5.4599 1.39999 6.9999V23.7999C1.39999 25.3399 2.65859 26.5999 4.19999 26.5999H23.8C25.34 26.5999 26.6 25.3399 26.6 23.7999V6.9999C26.6 5.4599 25.34 4.1999 23.8 4.1999ZM23.8 23.7999H4.19999V12.5999H23.8V23.7999ZM9.09999 1.3999H6.29999V6.2999H9.09999V1.3999ZM21.7 1.3999H18.9V6.2999H21.7V1.3999Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_295_1504)">
        <path
          d="M3.65188 0C1.6289 0 0 1.6289 0 3.65188V16.3481C0 18.3711 1.6289 20 3.65188 20H10.5331V12.1813H8.46564V9.36626H10.5331V6.96126C10.5331 5.07176 11.7547 3.33688 14.5688 3.33688C15.7081 3.33688 16.5506 3.44626 16.5506 3.44626L16.4844 6.07502C16.4844 6.07502 15.6251 6.0669 14.6875 6.0669C13.6727 6.0669 13.51 6.53446 13.51 7.31066V9.36628H16.565L16.4319 12.1813H13.51V20H16.3481C18.3711 20 20 18.3711 20 16.3482V3.6519C20 1.62892 18.3711 2e-05 16.3481 2e-05H3.65186L3.65188 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_295_1504">
          <rect width="20" height="20" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;

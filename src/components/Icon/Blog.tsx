import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.66666 14.666V2.66602H16.6667V14.666C16.6667 16.1387 15.4727 17.3327 14 17.3327"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 14.666H2.66666C2.66666 16.1387 3.86066 17.3327 5.33332 17.3327H14C12.5273 17.3327 11.3333 16.1387 11.3333 14.666Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 8.66602H14" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
      <path d="M7.33334 8.66602H8.66668" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
      <path d="M10 11.334H14" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
      <path d="M7.33334 11.334H8.66668" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
      <path d="M10 6H14" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
      <path d="M7.33334 6H8.66668" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
      <path
        d="M11.3333 14.666H2.66666C2.66666 16.1387 3.86066 17.3327 5.33332 17.3327H14C12.5273 17.3327 11.3333 16.1387 11.3333 14.666Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

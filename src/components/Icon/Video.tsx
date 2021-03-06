import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 1H3C1.3 1 0 2.3 0 4V14C0 15.7 1.3 17 3 17H14C15.7 17 17 15.7 17 14V4C17 2.3 15.7 1 14 1Z"
        fill={color}
      />
      <path
        d="M25.5 1.09995C25.2 0.899951 24.8 0.899951 24.5 1.09995L19.5 4.09995C19.2 4.29995 19 4.59995 19 4.99995V13C19 13.4 19.2 13.7 19.5 13.9L24.5 16.9C24.6 17 24.8 17 25 17C25.2 17 25.3 17 25.5 16.9C25.8 16.7 26 16.4 26 16V1.99995C26 1.59995 25.8 1.29995 25.5 1.09995Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

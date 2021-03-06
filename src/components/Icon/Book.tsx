import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_295_1571)">
        <path
          d="M9.91666 0H4.66666V9.33332H12.8333V2.91666C12.8333 2.14312 12.526 1.40125 11.9791 0.854271C11.4321 0.30729 10.6902 0 9.91666 0V0Z"
          fill={color}
        />
        <path
          d="M2.56374 9.36917C2.67988 9.34544 2.79812 9.33352 2.91666 9.33359H3.49999V0.0585938C2.84119 0.19307 2.24909 0.551033 1.82389 1.0719C1.3987 1.59277 1.16652 2.24454 1.16666 2.91693V9.9315C1.57444 9.62383 2.05652 9.42979 2.56374 9.36917Z"
          fill={color}
        />
        <path
          d="M12.8333 10.5H2.91666C2.45253 10.5 2.00741 10.6844 1.67922 11.0126C1.35103 11.3408 1.16666 11.7859 1.16666 12.25C1.16666 12.7141 1.35103 13.1592 1.67922 13.4874C2.00741 13.8156 2.45253 14 2.91666 14H9.91666C10.2997 14 10.679 13.9246 11.0328 13.778C11.3867 13.6314 11.7082 13.4166 11.9791 13.1457C12.2499 12.8749 12.4647 12.5534 12.6113 12.1995C12.7579 11.8456 12.8333 11.4664 12.8333 11.0833V10.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_295_1571">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;

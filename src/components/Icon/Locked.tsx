import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.0833 4.914V4.08332C11.0833 1.82818 9.25519 0 7.00001 0C4.74484 0 2.91669 1.82818 2.91669 4.08332V4.914C1.85504 5.37734 1.16822 6.42499 1.16669 7.58332V11.0833C1.1686 12.6934 2.47331 13.9981 4.08334 14H9.91666C11.5267 13.9981 12.8314 12.6934 12.8333 11.0833V7.58332C12.8318 6.42499 12.145 5.37734 11.0833 4.914ZM7.58334 9.91668C7.58334 10.2388 7.32218 10.5 7.00001 10.5C6.67785 10.5 6.41669 10.2388 6.41669 9.91668V8.75C6.41669 8.42784 6.67785 8.16668 7.00001 8.16668C7.32218 8.16668 7.58334 8.42784 7.58334 8.75V9.91668ZM9.91669 4.66668H4.08334V4.08335C4.08334 2.47253 5.38917 1.16668 7.00001 1.16668C8.61086 1.16668 9.91669 2.4725 9.91669 4.08335V4.66668Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.305 12.2558C4.59083 12.5417 5.05166 12.5417 5.3375 12.2558L10.185 7.40834C10.4125 7.18084 10.4125 6.81334 10.185 6.58584L5.3375 1.73834C5.05166 1.4525 4.59083 1.4525 4.305 1.73834C4.01916 2.02417 4.01916 2.485 4.305 2.77084L8.52833 7.00001L4.29916 11.2292C4.01916 11.5092 4.01916 11.9758 4.305 12.2558Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

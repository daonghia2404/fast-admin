import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8334 10.8327H10.8334V15.8327H9.16669V10.8327H4.16669V9.16602H9.16669V4.16602H10.8334V9.16602H15.8334V10.8327Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

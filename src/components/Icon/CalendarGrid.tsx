import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 2.25V15.75H16.5V2.25H1.5ZM6 14.25H3V11.25H6V14.25ZM6 9.75H3V6.75H6V9.75ZM10.5 14.25H7.5V11.25H10.5V14.25ZM10.5 9.75H7.5V6.75H10.5V9.75ZM15 14.25H12V11.25H15V14.25ZM15 9.75H12V6.75H15V9.75Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

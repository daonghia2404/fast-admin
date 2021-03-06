import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" stroke={color} />
      <path
        d="M20.6532 12.8663H17.4681V10.7774C17.4681 9.99288 17.9881 9.80999 18.3543 9.80999C18.7197 9.80999 20.6019 9.80999 20.6019 9.80999V6.36126L17.5065 6.34918C14.0703 6.34918 13.2883 8.92135 13.2883 10.5674V12.8663H11.301V16.42H13.2883C13.2883 20.9806 13.2883 26.4758 13.2883 26.4758H17.4681C17.4681 26.4758 17.4681 20.9265 17.4681 16.42H20.2886L20.6532 12.8663Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 9.84358 14.4478 11.3082 13.5242 12.4629L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C16.01 16.5507 15.5845 16.5715 15.2903 16.3427L15.2197 16.2803L12.4629 13.5242C11.3082 14.4478 9.84358 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5ZM8.25 3C5.35051 3 3 5.35051 3 8.25C3 11.1495 5.35051 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.35051 11.1495 3 8.25 3Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.08333 18.4168L21.25 18.4168L16.5892 23.0776C16.4564 23.2093 16.351 23.366 16.2791 23.5386C16.2071 23.7112 16.1701 23.8964 16.1701 24.0834C16.1701 24.2704 16.2071 24.4556 16.2791 24.6282C16.351 24.8009 16.4564 24.9576 16.5892 25.0893C16.8546 25.3531 17.2137 25.5012 17.5879 25.5012C17.9622 25.5012 18.3212 25.3531 18.5867 25.0893L24.6642 18.9976C25.1962 18.4687 25.4968 17.7503 25.5 17.0001C25.4931 16.2548 25.1928 15.5422 24.6642 15.0168L18.5867 8.92512C18.4546 8.79396 18.298 8.69011 18.1257 8.61948C17.9535 8.54885 17.7691 8.51284 17.5829 8.5135C17.3968 8.51416 17.2126 8.55147 17.0409 8.62332C16.8691 8.69516 16.7132 8.80012 16.5821 8.9322C16.4509 9.06429 16.3471 9.22092 16.2764 9.39315C16.2058 9.56537 16.1698 9.74982 16.1705 9.93596C16.1711 10.1221 16.2084 10.3063 16.2803 10.478C16.3521 10.6497 16.4571 10.8056 16.5892 10.9368L21.25 15.5834L7.08333 15.5834C6.70761 15.5834 6.34728 15.7327 6.0816 15.9984C5.81592 16.2641 5.66667 16.6244 5.66667 17.0001C5.66667 17.3758 5.81592 17.7362 6.0816 18.0018C6.34728 18.2675 6.70761 18.4168 7.08333 18.4168Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

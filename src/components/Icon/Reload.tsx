import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.46875 6.375H3.09375C2.99524 6.37506 2.89769 6.3557 2.80667 6.31802C2.71565 6.28035 2.63295 6.22511 2.56329 6.15546C2.49364 6.0858 2.4384 6.0031 2.40073 5.91208C2.36305 5.82106 2.34369 5.72351 2.34375 5.625V2.25C2.34375 2.05109 2.42277 1.86032 2.56342 1.71967C2.70407 1.57902 2.89484 1.5 3.09375 1.5C3.29266 1.5 3.48343 1.57902 3.62408 1.71967C3.76473 1.86032 3.84375 2.05109 3.84375 2.25V4.875H6.46875C6.66766 4.875 6.85843 4.95402 6.99908 5.09467C7.13973 5.23532 7.21875 5.42609 7.21875 5.625C7.21875 5.82391 7.13973 6.01468 6.99908 6.15533C6.85843 6.29598 6.66766 6.375 6.46875 6.375Z"
        fill={color}
      />
      <path
        d="M15.75 9.75001C15.6515 9.75007 15.5539 9.73071 15.4629 9.69304C15.3719 9.65536 15.2892 9.60012 15.2195 9.53047C15.1499 9.46081 15.0946 9.37811 15.057 9.28709C15.0193 9.19607 14.9999 9.09852 15 9.00001C15.0008 7.67945 14.5657 6.39555 13.7621 5.3476C12.9586 4.29965 11.8316 3.54627 10.556 3.20441C9.28048 2.86255 7.92776 2.95132 6.70783 3.45695C5.48791 3.96258 4.46901 4.85679 3.80931 6.00076C3.70966 6.17287 3.54572 6.29834 3.35355 6.34957C3.16139 6.4008 2.95674 6.37359 2.78464 6.27394C2.61253 6.17428 2.48706 6.01034 2.43583 5.81818C2.3846 5.62601 2.41181 5.42137 2.51146 5.24926C3.33649 3.81965 4.61031 2.70231 6.13525 2.07064C7.6602 1.43896 9.351 1.32828 10.9453 1.75575C12.5396 2.18323 13.9482 3.12496 14.9525 4.43482C15.9569 5.74468 16.5009 7.34941 16.5 9.00001C16.5 9.09852 16.4807 9.19607 16.443 9.28709C16.4053 9.37811 16.3501 9.46081 16.2804 9.53047C16.2108 9.60012 16.1281 9.65536 16.0371 9.69304C15.946 9.73071 15.8485 9.75007 15.75 9.75001ZM14.9062 16.5C14.8077 16.5001 14.7102 16.4807 14.6192 16.443C14.5281 16.4054 14.4454 16.3501 14.3758 16.2805C14.3061 16.2108 14.2509 16.1281 14.2132 16.0371C14.1755 15.9461 14.1562 15.8485 14.1562 15.75V13.125H11.5312C11.3323 13.125 11.1416 13.046 11.0009 12.9053C10.8603 12.7647 10.7812 12.5739 10.7812 12.375C10.7812 12.1761 10.8603 11.9853 11.0009 11.8447C11.1416 11.704 11.3323 11.625 11.5312 11.625H14.9062C15.0047 11.625 15.1023 11.6443 15.1933 11.682C15.2843 11.7197 15.367 11.7749 15.4367 11.8446C15.5063 11.9142 15.5616 11.9969 15.5993 12.0879C15.6369 12.179 15.6563 12.2765 15.6562 12.375V15.75C15.6563 15.8485 15.6369 15.9461 15.5993 16.0371C15.5616 16.1281 15.5063 16.2108 15.4367 16.2805C15.367 16.3501 15.2843 16.4054 15.1933 16.443C15.1023 16.4807 15.0047 16.5001 14.9062 16.5Z"
        fill={color}
      />
      <path
        d="M9 16.5C7.01159 16.4977 5.1053 15.7067 3.69928 14.3007C2.29326 12.8947 1.50234 10.9884 1.5 9C1.5 8.80109 1.57902 8.61032 1.71967 8.46967C1.86032 8.32902 2.05109 8.25 2.25 8.25C2.44891 8.25 2.63968 8.32902 2.78033 8.46967C2.92098 8.61032 3 8.80109 3 9C2.99917 10.3206 3.4343 11.6045 4.23785 12.6524C5.0414 13.7004 6.16841 14.4537 7.44396 14.7956C8.7195 15.1375 10.0722 15.0487 11.2922 14.5431C12.5121 14.0374 13.531 13.1432 14.1907 11.9992C14.2903 11.8271 14.4543 11.7017 14.6464 11.6504C14.8386 11.5992 15.0432 11.6264 15.2154 11.7261C15.3875 11.8257 15.5129 11.9897 15.5642 12.1818C15.6154 12.374 15.5882 12.5786 15.4885 12.7507C14.8289 13.8881 13.8827 14.8328 12.7442 15.4906C11.6058 16.1485 10.3148 16.4965 9 16.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;

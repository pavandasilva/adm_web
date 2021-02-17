import { keyframes } from 'styled-components';

export const increasingWidth = () => keyframes`
  0% {
      transform : scaleX(0);
  }
  100% {
      transform : scaleX(1);
  }
`;

export const fadein = () => keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

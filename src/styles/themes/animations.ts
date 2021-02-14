import { keyframes } from 'styled-components';

export const increasingWidth = () => keyframes`
  0% {
      transform : scaleX(0);
  }
  100% {
      transform : scaleX(1);
  }
`;

export const opacity = () => keyframes`
  0% {
      transform : opacity(0);
  }
  100% {
      transform : opacity(1);
  }
`;

import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { ProgressBarColor } from '.';

interface ProgressBarStyles {
  percent: number
  color: ProgressBarColor
}

const increasingWidth = () => keyframes`
  0% {
      transform : scaleX(0);
  }
  100% {
      transform : scaleX(1);
  }
`;

export const Container = styled.div<ProgressBarStyles>`
  height: 4px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.mainBackgroundLight};
  overflow: hidden;
  width: 100%;
`;

export const Bar = styled.div<ProgressBarStyles>`
  width: ${(props) => `${props.percent}%`};
  border-radius: 4px;
  height:  4px;
  padding: 1px;
  background-color: ${(props) => props.theme.colors[props.color]};
  animation: ${increasingWidth()} 600ms cubic-bezier(0.68, -0.05, 0.27, 1.05) forwards;
  transform-origin: left;
`;

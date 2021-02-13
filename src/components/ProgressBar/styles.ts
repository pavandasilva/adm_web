import styled from 'styled-components';
import { ProgressBarColor } from '.';

interface ProgressBarStyles {
  percent: number
  color: ProgressBarColor
}

export const Container = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.mainBackgroundLight};
  overflow: hidden;
`;

export const Bar = styled.div<ProgressBarStyles>`
  border-radius: 4px;
  height: 100%;
  padding: 1px;
  background-color:  ${(props) => props.theme.colors[props.color]};;
  width: ${(props) => `${props.percent}%`};
`;

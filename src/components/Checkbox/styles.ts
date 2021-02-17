import styled from 'styled-components';
import { Color } from '.';

interface ContainerCheckboxStyles {
  color: Color
}

export const Container = styled.div<ContainerCheckboxStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.checkBoxes.primary[props.color].borderColor};
  border-radius: 4px;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.checkBoxes.primary[props.color].backgroundColor};

  transition: all 0.3s;
  transition-delay: 0.04s;

  > svg {
    width: 12px;
    fill: ${(props) => props.theme.checkBoxes.primary[props.color].color};
    stroke:   ${(props) => props.theme.checkBoxes.primary[props.color].color};
    transition: all 0.3s;
    transition-delay: 0.04s;
  }
`;

import styled from 'styled-components';
import { SearchColor } from '.';
import { fadein } from '../../styles/themes/animations';

interface SearchPropsStyles {
  color: SearchColor
}

export const Container = styled.div<SearchPropsStyles>`
  display: flex;
  align-items: center;
  width: 380px;
  height: 38px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors[props.color]};
  animation: ${fadein} 0.6s ease-in-out forwards;

  input {
    border: none;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 1px;
    width: 100%;
    background-color: transparent;
    margin-left: 12px;
    margin-right: 15px;
    color: ${(props) => props.theme.colors.font.secondary};

    &::placeholder {
      color: ${(props) => props.theme.colors.font.tertiary};
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;

  svg {
    fill: ${(props) => props.theme.colors.font.tertiary};
    height: 16px;
    width: 16px;
  }
`;

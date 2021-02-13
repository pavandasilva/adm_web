import styled, { css } from 'styled-components';
import { ModeInput } from '.';

interface ModeInputStyles {
  mode: ModeInput
  error: boolean
  focused: boolean
}

export const Container = styled.div<ModeInputStyles>`
  display: flex;
  flex-direction: column;
  height: 48px;
  width: 300px;
  padding-bottom: 6px;

  input {
    margin-top: 4px;
    border: none;
    width: 100%;
    color: ${(props) => props.theme.colors.font.primary};
    height: 42px;

    &::placeholder{
      color: ${(props) => props.theme.colors.font.tertiary};
    }
  }

  ${(props) => {
    let borderColor = props.theme.colors.font.tertiary;

    if (props.error) {
      borderColor = props.theme.colors.danger;
    } else if (props.focused) {
      borderColor = props.theme.colors.font.primary;
    }

    return css`
      border-bottom: 1px solid ${borderColor};
    `;
  }};

  transition: all 0.5ms;
`;

export const Title = styled.div<ModeInputStyles>`
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => {
    let fontColor = '';

    if (props.mode === 'editing') {
      fontColor = props.theme.colors.primary;
    } else if (props.mode === 'default') {
      fontColor = props.theme.colors.font.secondary;
    }

    if (props.error) {
      fontColor = props.theme.colors.danger;
    }
    return fontColor;
  }}
`;

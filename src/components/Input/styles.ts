import styled, { css } from 'styled-components';
import { ModeInput } from '.';
import { increasingWidth, opacity } from '../../styles/themes/animations';

interface ModeInputStyles {
  mode: ModeInput
  error: boolean
  focused: boolean
}

interface InfoContentStyles {
  focused: boolean
}

export const Wrapper = styled.div<ModeInputStyles>`
  height: 100px;
`;

export const Container = styled.div<ModeInputStyles>`
  display: flex;
  position: relative;
  height: 48px;
  margin-bottom: 6px;

  div:first-of-type {
    display: flex;
    flex-direction: column;
    display: 1;
    width: 300px;
  }

  input {
    margin-top: 4px;
    border: none;
    width: 100%;
    color: ${(props) => props.theme.colors.font.primary};
    height: 42px;
    background-color: 'transparent';

    &::placeholder{
      color: ${(props) => props.theme.colors.font.tertiary};
    }
  }

  border-bottom: 1px solid ${(props) => (props.focused ? props.theme.colors.font.primary : props.theme.colors.font.tertiary)};
  transition: all 700ms ease;
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

    return fontColor;
  }};
`;

export const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 22px;

  svg {
    width: 18px;
    height: 18px;
    fill: ${(props) => props.theme.colors.danger};
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.danger};
  font-size: 10px;
  font-weight: 600;
  width: 230px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const InfoContent = styled.div<InfoContentStyles>`
  display: flex;
  padding: 0px 9px;

  > span {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    font-size: 11px;
    font-weight: 200;
    letter-spacing: 1px;
    color:  ${(props) => (props.focused ? props.theme.colors.font.primary : props.theme.colors.font.tertiary)};
    transition: all 400ms ease;
  }
`;

export const Line = styled.div<ModeInputStyles>`
  position: absolute;
  bottom: -2px;
  width: 100%;
  height: 2px;
  padding: 1px;

  ${(props) => {
    let color = props.theme.colors.font.tertiary;

    if (props.error) {
      color = props.theme.colors.danger;
    } else if (props.focused) {
      color = props.theme.colors.font.primary;
    }

    return css`
        background-color: ${color};
    `;
  }};

  animation: ${increasingWidth()} 600ms cubic-bezier(0.68, -0.05, 0.27, 1.05) forwards;
  transform-origin: center;
`;

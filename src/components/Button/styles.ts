import styled from 'styled-components'
import { transparentize } from 'polished'

import { ButtonColor } from '.'

interface ContainerButton {
  color: ButtonColor
}

export const Container = styled.button<ContainerButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 42px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => props.theme.buttons[props.color].default.backgroundColor};
  box-shadow: 0px 0px 16px -5px ${props => props.theme.buttons[props.color].default.backgroundColor};
  border: 1px solid ${props => props.theme.buttons[props.color].default.borderColor};
  color: ${props => props.theme.buttons[props.color].default.fontColor};
  letter-spacing: 0.1em;
  border-radius: 5px;

  &:hover{
    background: ${props => props.theme.buttons[props.color].hover.backgroundColor};
    border: 1px solid ${props => props.theme.buttons[props.color].hover.borderColor};
    color: ${props => props.theme.buttons[props.color].hover.fontColor};
  }

  &:disabled {
    background: ${props => props.theme.buttons[props.color].disabled.backgroundColor};
    box-shadow: none;
    border: 1px solid ${props => props.theme.buttons[props.color].disabled.borderColor};
    color: ${props => props.theme.buttons[props.color].disabled.fontColor};
  }

  &:active {
    background: ${props => props.theme.buttons[props.color].pressed.backgroundColor};
    border: 1px solid ${props => props.theme.buttons[props.color].pressed.borderColor};
    color: ${props => props.theme.buttons[props.color].pressed.fontColor};
  }

  transition: all 0.3s;
  user-select: none;
`

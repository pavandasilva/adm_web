/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

export type ButtonColor = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  color: ButtonColor
}

const Button = ({ children, color, ...rest } : ButtonProps) => (<Container {...rest} color={color}>{children}</Container>
);

export default Button;

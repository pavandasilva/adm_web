import React from 'react';

import { Container } from './styles';

export type ColorStatus = 'primary' | 'warning' | 'danger' | 'danger' | 'ok' | 'success'

interface StatusProps {
  color: ColorStatus
  children: React.ReactNode
}

const Status = ({color, children}: StatusProps) => {
  return (
    <Container color={color}>
      { children }
    </Container>
  )
}

export default Status;

import React from 'react';

import { Container } from './styles'

export type SampleStatusColor = 'primary' | 'warning' | 'danger' | 'danger' | 'ok' | 'success'

interface SampleStatusProps {
  color: SampleStatusColor
  children: React.ReactNode
}

const SampleStatus  = ({children, color} : SampleStatusProps) => {
  return (
    <Container color={color}>
      <div></div>
      <span>{children}</span>
    </Container>)
}

export default SampleStatus;

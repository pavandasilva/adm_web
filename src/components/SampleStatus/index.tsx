import React, { ReactNode } from 'react';
import { Container } from './styles';

export type SampleStatusColor = 'primary' | 'warning' | 'danger' | 'danger' | 'ok' | 'success'

interface SampleStatusProps {
  color: SampleStatusColor
  children: ReactNode
}

const SampleStatus = ({ children, color } : SampleStatusProps) => (
  <Container color={color}>
    <div />
    <span>{children}</span>
  </Container>
);

export default SampleStatus;

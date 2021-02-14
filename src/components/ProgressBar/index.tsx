import React from 'react';

import { Container, Bar } from './styles';

export type ProgressBarColor = 'danger' | 'success' | 'warning' | 'ok' | 'primary'

interface ProgressBarProps {
  percent: number
  color: ProgressBarColor
}

const ProgressBar = ({ percent, color }: ProgressBarProps) => (
  <Container percent={percent} color={color}>
    <Bar percent={percent} color={color} />
  </Container>
);

export default ProgressBar;

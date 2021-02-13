import React from 'react';

import { Container, Bar } from './styles';

export type ProgressBarColor = 'danger' | 'success'

interface ProgressBarProps {
  percent: number
  color: ProgressBarColor
}

const ProgressBar = ({ percent, color }: ProgressBarProps) => (
  <Container>
    <Bar percent={percent} color={color} />
  </Container>
);

export default ProgressBar;

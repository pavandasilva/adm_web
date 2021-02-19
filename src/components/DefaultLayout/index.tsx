import React from 'react';
import SideMenu from '../SideMenu';

import { Container } from './styles';

interface LayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => (
  <Container>
    <SideMenu />
    {children}
  </Container>
);

export default DefaultLayout;

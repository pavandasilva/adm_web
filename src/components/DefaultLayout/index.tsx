/* eslint-disable import/no-unresolved */
import React from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import SideMenu from '../SideMenu';

import {
  Container, Content, Body, Alert,
} from './styles';

interface LayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => (
  <Container>
    <SideMenu />
    <Content>
      <header>
        <div>
          <MdNotificationsNone size={24} />
          <Alert />
        </div>
      </header>
      <Body>
        {children}
      </Body>
    </Content>
  </Container>
);

export default DefaultLayout;

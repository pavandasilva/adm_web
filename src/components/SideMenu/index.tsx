/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  MdDashboard, MdPerson, MdConfirmationNumber, MdMonetizationOn, MdAssessment, MdDonutSmall, MdMarkunreadMailbox, MdChromeReaderMode, MdMoreHoriz, MdLocationCity,
} from 'react-icons/md';
import MenuToogle from '../../assets/icons/svgs/MenuToogle';

import AvatarDemo from '../../assets/img/rogerinho.jpg';

import {
  Container, User, Menu, SubMenu, Avatar, Info,
} from './styles';

const SideMenu = () => (
  <Container>
    <header>
      <span>ADM</span>
    </header>

    <User>
      <Avatar>
        <img src={AvatarDemo} alt="Rogerio Pavan" />
      </Avatar>
      <Info>
        <span>Rogerio Pavan</span>
        <p>rogerio_pavan@hotmail.com</p>
      </Info>
    </User>

    <Menu>
      <ul>
        <li>
          <MdDashboard />
          <span>Dashboard</span>
        </li>
        <li>
          <MdPerson />
          <span>Clientes</span>
        </li>
        <li>
          <MdLocationCity />
          <span>Fornecedores</span>
        </li>
        <li>
          <MdMonetizationOn />
          <span>Vendas</span>
        </li>
        <li>
          <MdConfirmationNumber />
          <span>Compras</span>
        </li>
        <li>
          <MdDonutSmall />
          <span>Despesas</span>
        </li>
        <li>
          <MdAssessment />
          <span>Financeiro</span>
        </li>
        <li>
          <MdMarkunreadMailbox />
          <span>Contas Bancárias</span>
        </li>
        <li>
          <MdChromeReaderMode />
          <span>Produtos & Serviços</span>
        </li>
      </ul>
    </Menu>

    <SubMenu>
      <ul>
        <li>
          <MdMoreHoriz />
          <span>Configurações</span>
        </li>
      </ul>
    </SubMenu>

    <footer>
      <MenuToogle />
      <span>Recolher Menu</span>
    </footer>

  </Container>
);

export default SideMenu;

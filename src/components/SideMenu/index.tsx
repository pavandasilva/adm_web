/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import {
  MdDashboard, MdPerson, MdConfirmationNumber, MdMonetizationOn, MdAssessment, MdDonutSmall, MdMarkunreadMailbox, MdChromeReaderMode, MdMoreHoriz, MdLocationCity,
} from 'react-icons/md';
import MenuToogle from '../../assets/icons/svgs/MenuToogle';

import AvatarDemo from '../../assets/img/rogerinho.jpg';

import {
  Container, User, Menu, SubMenu, Avatar, Info, Li,
} from './styles';

interface MenuType {
  [index: string]: boolean
}

const SideMenu = () => {
  const [menu, setMenu] = useState<MenuType>({} as MenuType);

  const handleLiOnClick = (li: string) => {
    setMenu({ [li]: true });
  };

  return (
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
          <Li active={menu?.dashboard} onClick={() => handleLiOnClick('dashboard')}>
            <MdDashboard />
            <span>Dashboard</span>
          </Li>
          <Li active={menu?.clientes} onClick={() => handleLiOnClick('clientes')}>
            <MdPerson />
            <span>Clientes</span>
          </Li>
          <Li active={menu?.fornecedores} onClick={() => handleLiOnClick('fornecedores')}>
            <MdLocationCity />
            <span>Fornecedores</span>
          </Li>
          <Li active={menu?.vendas} onClick={() => handleLiOnClick('vendas')}>
            <MdMonetizationOn />
            <span>Vendas</span>
          </Li>
          <Li active={menu?.compras} onClick={() => handleLiOnClick('compras')}>
            <MdConfirmationNumber />
            <span>Compras</span>
          </Li>
          <Li active={menu?.despesas} onClick={() => handleLiOnClick('despesas')}>
            <MdDonutSmall />
            <span>Despesas</span>
          </Li>
          <Li active={menu?.financeiro} onClick={() => handleLiOnClick('financeiro')}>
            <MdAssessment />
            <span>Financeiro</span>
          </Li>
          <Li active={menu?.contas} onClick={() => handleLiOnClick('contas')}>
            <MdMarkunreadMailbox />
            <span>Contas Bancárias</span>
          </Li>
          <Li active={menu?.produtos} onClick={() => handleLiOnClick('produtos')}>
            <MdChromeReaderMode />
            <span>Produtos & Serviços</span>
          </Li>
        </ul>
      </Menu>

      <SubMenu>
        <ul>
          <Li active={menu?.configuracoes} onClick={() => handleLiOnClick('configuracoes')}>
            <MdMoreHoriz />
            <span>Configurações</span>
          </Li>
        </ul>
      </SubMenu>

      <footer>
        <MenuToogle />
        <span>Recolher Menu</span>
      </footer>

    </Container>
  );
};

export default SideMenu;

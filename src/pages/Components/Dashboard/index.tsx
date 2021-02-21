/* eslint-disable import/no-unresolved */
import React from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

import {
  Card, Container, Info, BankAccounts, Account, Balance,
} from './styles';

const Dashboard = () => (
  <Container>
    <div>Main</div>
    <aside>
      <Info>
        <Card>
          <h3>122</h3>
          <p>
            <MdArrowDropUp />
            Clientes
          </p>
        </Card>
        <Card>
          <h3>240,34</h3>
          <p>
            <MdArrowDropUp />
            Contas à pagar do mês
          </p>
        </Card>
        <Card>
          <h3>112,39</h3>
          <p>
            <MdArrowDropUp />
            Contas à pagar hoje
          </p>
        </Card>
        <Card>
          <h3>2.455,12</h3>
          <p>
            <MdArrowDropUp />
            Contas à receber do mês
          </p>
        </Card>
        <Card>
          <h3>2.455,12</h3>
          <p>
            <MdArrowDropDown />
            Contas à receber hoje
          </p>
        </Card>
      </Info>
      <BankAccounts>
        <h3>Contas bancárias</h3>
        <Account>
          <p>Itau: 22</p>
          <p>Agência: 021</p>
          <p>C/C: 172090-130</p>
          <p>Titular: Rogerio Pavan da Silva</p>
          <footer>
            <h4>Extrato</h4>

            <Balance>
              <span>Saldo</span>
              <strong>24010,34</strong>
            </Balance>

          </footer>
        </Account>
        <Account>
          <p>Itau: 22</p>
          <p>Agência: 021</p>
          <p>C/C: 172090-130</p>
          <p>Titular: Rogerio Pavan da Silva</p>
          <footer>
            <h4>Extrato</h4>

            <Balance>
              <span>Saldo</span>
              <strong>24010,34</strong>
            </Balance>

          </footer>
        </Account>
        <Account>
          <p>Itau: 22</p>
          <p>Agência: 021</p>
          <p>C/C: 172090-130</p>
          <p>Titular: Rogerio Pavan da Silva</p>
          <footer>
            <h4>Extrato</h4>

            <Balance>
              <span>Saldo</span>
              <strong>24010,34</strong>
            </Balance>

          </footer>
        </Account>
        <Account>
          <p>Itau: 22</p>
          <p>Agência: 021</p>
          <p>C/C: 172090-130</p>
          <p>Titular: Rogerio Pavan da Silva</p>
          <footer>
            <h4>Extrato</h4>

            <Balance>
              <span>Saldo</span>
              <strong>24010,34</strong>
            </Balance>

          </footer>
        </Account>
      </BankAccounts>
    </aside>

  </Container>
);

export default Dashboard;

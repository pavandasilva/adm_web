/* eslint-disable import/no-unresolved */
import React from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import Checkbox from '../../components/Checkbox';
import MainChart from '../../components/MainChart';
import ProgressBar from '../../components/ProgressBar';
import Search from '../../components/Search';
import Status from '../../components/Status';

import {
  Card, Container, Info, BankAccounts, Account, Balance, FixedHeader, Main, SearchWrapper, Bars, Accounts, AccountCard, Row, Chart,
} from './styles';

const Dashboard = () => (
  <Container>
    <Main>
      <header>
        <h2>Entradas e saídas</h2>
        <aside>
          <Checkbox name="toPay" checked={false}>a pagar</Checkbox>
          <Checkbox name="toReceive" checked={false}>a receber</Checkbox>
          <Checkbox name="late" checked={false}>em atraso</Checkbox>
        </aside>
      </header>
      <SearchWrapper>
        <Search color="mainBackgroundLight" placeholder="Buscar por palavra-chave" />
      </SearchWrapper>
      <Bars>
        <ProgressBar color="success" percent={76} />
        <ProgressBar color="danger" percent={23} />
      </Bars>
      <Accounts>
        <AccountCard>
          <div>
            <h2>CPFL Paulista</h2>
            <p>
              Vencimento:
              {' '}
              <strong>23 de dezembro, 2018</strong>
              {' '}
            </p>
            <p>4/8</p>
            <span>#12333-Maria Olivares</span>
          </div>
          <aside>
            <span>Vendas</span>
            <strong>123,00</strong>
            <Status color="danger">a pagar</Status>
          </aside>

        </AccountCard>
        <AccountCard>
          <div>
            <h2>CPFL Paulista</h2>
            <p>
              Vencimento:
              {' '}
              <strong>23 de dezembro, 2018</strong>
              {' '}
            </p>
            <p>4/8</p>
            <span>#12333-Maria Olivares</span>
          </div>
          <aside>
            <span>Vendas</span>
            <strong>123,00</strong>
            <Status color="success">a receber</Status>
          </aside>

        </AccountCard>
        <AccountCard>
          <div>
            <h2>CPFL Paulista</h2>
            <p>
              Vencimento:
              {' '}
              <strong>23 de dezembro, 2018</strong>
              {' '}
            </p>
            <p>4/8</p>
            <span>#12333-Maria Olivares</span>
          </div>
          <aside>
            <span>Vendas</span>
            <strong>123,00</strong>
            <Status color="success">a receber</Status>
          </aside>

        </AccountCard>
        <AccountCard>
          <div>
            <h2>CPFL Paulista</h2>
            <p>
              Vencimento:
              {' '}
              <strong>23 de dezembro, 2018</strong>
              {' '}
            </p>
            <p>4/8</p>
            <span>#12333-Maria Olivares</span>
          </div>
          <aside>
            <span>Vendas</span>
            <strong>123,00</strong>
            <Status color="success">a receber</Status>
          </aside>

        </AccountCard>
        <AccountCard>
          <div>
            <h2>CPFL Paulista</h2>
            <p>
              Vencimento:
              {' '}
              <strong>23 de dezembro, 2018</strong>
              {' '}
            </p>
            <p>4/8</p>
            <span>#12333-Maria Olivares</span>
          </div>
          <aside>
            <span>Vendas</span>
            <strong>123,00</strong>
            <Status color="success">a receber</Status>
          </aside>

        </AccountCard>
        <AccountCard>
          <div>
            <h2>CPFL Paulista</h2>
            <p>
              Vencimento:
              {' '}
              <strong>23 de dezembro, 2018</strong>
              {' '}
            </p>
            <p>4/8</p>
            <span>#12333-Maria Olivares</span>
          </div>
          <aside>
            <span>Vendas</span>
            <strong>123,00</strong>
            <Status color="success">a receber</Status>
          </aside>

        </AccountCard>
        <AccountCard>
          <div>
            <h2>CPFL Paulista</h2>
            <p>
              Vencimento:
              {' '}
              <strong>23 de dezembro, 2018</strong>
              {' '}
            </p>
            <p>4/8</p>
            <span>#12333-Maria Olivares</span>
          </div>
          <aside>
            <span>Vendas</span>
            <strong>123,00</strong>
            <Status color="danger">a pagar</Status>
          </aside>

        </AccountCard>
        <AccountCard>
          <div>
            <h2>CPFL Paulista</h2>
            <p>
              Vencimento:
              {' '}
              <strong>23 de dezembro, 2018</strong>
              {' '}
            </p>
            <p>4/8</p>
            <span>#12333-Maria Olivares</span>
          </div>
          <aside>
            <span>Vendas</span>
            <strong>123,00</strong>
            <Status color="success">a receber</Status>
          </aside>

        </AccountCard>
      </Accounts>
    </Main>
    <aside>
      <Row>
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
      </Row>
      <Chart>
        <MainChart
          subtitles={{
            danger: 'Saídas',
            success: 'Entradas',
          }}
          symbol="R$"
          values={[
            {
              success: 200,
              danger: 10,
              subtitle: '22JAN2020',
            },
            {
              success: 900,
              danger: 900,
              subtitle: '23JAN2020',
            },
            {
              success: 230,
              danger: 20,
              subtitle: '24JAN2020',
            },
            {
              success: 345,
              danger: 9,
              subtitle: '25JAN2020',
            },
            {
              success: 50,
              danger: 8,
              subtitle: '26JAN2020',
            },
            {
              success: 200,
              danger: 10,
              subtitle: '27JAN2020',
            },
            {
              success: 910,
              danger: 900,
              subtitle: '28JAN2020',
            },
            {
              success: 230,
              danger: 20,
              subtitle: '29JAN2020',
            },
          ]}
        />
      </Chart>

    </aside>

  </Container>
);

export default Dashboard;

import React from 'react';
import Button from '../../components/Button';
import Status from '../../components/Status';
import SampleStatus from '../../components/SampleStatus';
import {
  Container, Buttons, Statuses, SampleStatused, ProgressesBar, TableDemo, FlexBreak,
} from './styles';
import Search from '../../components/Search';
import Input from '../../components/Input';
import ProgressBar from '../../components/ProgressBar';
import Table, { DataType, HeaderType } from '../../components/Table';

const header: HeaderType[] = [
  {
    title: 'Contato',
    reference: 'contact',
    contrast: true,
  },
  {
    title: 'E-mail',
    reference: 'email',
  },
  {
    title: 'Empresa',
    reference: 'company',
  },
  {
    title: 'Cidade',
    reference: 'city',
  },
  {
    title: 'Situação',
    reference: 'status',
    width: 100,
  },
];

const data: DataType = [
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="success">Ativo</SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="success">Ativo</SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud Brasilia count tower desce a letra',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="success">Ativo</SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="danger">Bloqueado</SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="ok">Inativo </SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="success">Ativo </SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="success">Ativo</SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="success">Ativo</SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud Brasilia count tower desce a letra',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="success">Ativo</SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="danger">Bloqueado</SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="ok">Inativo </SampleStatus>,
  },
  {
    contact: 'Lindsey Stroud',
    email: 'lindsey.stroud@gmail.com',
    company: 'Banana Café',
    city: 'Jaú',
    status: <SampleStatus color="success">Ativo </SampleStatus>,
  },
];

const Components = () => (
  <Container>
    <section>
      <Buttons>
        <h2>Buttons</h2>
        <Button color="primary">Button primary</Button>
        <Button color="secondary">Button secondary</Button>
        <Button color="tertiary">Button tertiary</Button>
      </Buttons>
      <Buttons>
        <h2>Buttons</h2>
        <Button color="primary" disabled>Button primary</Button>
        <Button color="secondary" disabled>Button secondary</Button>
        <Button color="tertiary" disabled>Button tertiary</Button>
      </Buttons>
    </section>
    <section>
      <Statuses>
        <h2>Statuses</h2>
        <Status color="primary">
          primary
        </Status>
        <Status color="warning">
          warning
        </Status>
        <Status color="danger">
          danger
        </Status>
        <Status color="success">
          success
        </Status>
        <Status color="ok">
          ok
        </Status>
      </Statuses>
    </section>
    <section>
      <SampleStatused>
        <h2>Sample Statuses</h2>
        <SampleStatus color="primary">primary</SampleStatus>
        <SampleStatus color="danger">danger</SampleStatus>
        <SampleStatus color="success">success</SampleStatus>
        <SampleStatus color="ok">ok</SampleStatus>
        <SampleStatus color="warning">warning</SampleStatus>
      </SampleStatused>
    </section>
    <section>
      <SampleStatused>
        <h2>Searches</h2>
        <Search placeholder="Buscador mainBackgroundLight" color="mainBackgroundLight" />
        <Search placeholder="Buscador mainBackgroundDarked" color="mainBackground" />
      </SampleStatused>
    </section>
    <section>
      <SampleStatused>
        <h2>Inputs</h2>
        <Input placeholder="Default Input" mode="default" title="Default Input" mask="" />
        <Input placeholder="Default Input Erro" mode="default" title="Default Input" error="Erro desconhecido no input de default" mask="" />
        <Input placeholder="New Input" mode="new" title="New Input" mask="" />
        <Input placeholder="New Input Erro" mode="new" title="New Input" error="Erro desconhecido New Input Erro" mask="" />
      </SampleStatused>
    </section>
    <section>
      <SampleStatused>
        <h2>Editing Inputs </h2>
        <Input placeholder="Editing Input" mode="editing" title="Editing Input" value="Editing Input" mask="" />
        <Input placeholder="Editing Input Erro" mode="editing" title="Editing Input Erro" error="Erro desconhecido Editing Input Erro" value="Editing Input" mask="" />

        <h3>Masks</h3>
        <Input placeholder="Data masking" mode="editing" title="Data masking" value="22/10/2020" mask="99/99/9999" />
        {/*   <Input mode="editing" />
        <Input mode="showing" /> */}
      </SampleStatused>
    </section>

    <section>
      <ProgressesBar>
        <h2>Progresses Bar</h2>
        <ProgressBar percent={40} color="danger" />
        <ProgressBar percent={80} color="success" />
        <ProgressBar percent={22} color="ok" />
        <ProgressBar percent={99} color="primary" />
      </ProgressesBar>
    </section>

    <FlexBreak />

    <TableDemo>
      <Table title="Table Demonstração" data={data} header={header} editable />
    </TableDemo>

  </Container>
);

export default Components;

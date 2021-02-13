import React from 'react';
import Button from '../../components/Button';
import Status from '../../components/Status';
import SampleStatus from '../../components/SampleStatus';
import {
  Container, Buttons, Statuses, SampleStatused,
} from './styles';
import Search from '../../components/Search';
import Input from '../../components/Input';

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
        <Input placeholder="Default Input" mode="default" title="Default Input" />
        <Input placeholder="Default Input Erro" mode="default" title="Default Input" error="Erro desconhecido no input de default" />
        <Input placeholder="New Input" mode="new" title="New Input" />
        <Input placeholder="New Input Erro" mode="new" title="New Input" error="Erro desconhecido New Input Erro" />

        <Input placeholder="Default Input" mode="default" title="Default Input" required />

        <h3>Editing</h3>
        <Input placeholder="Editing Input" mode="editing" title="Editing Input" value="Editing Input" />
        <Input placeholder="Editing Input Erro" mode="editing" title="Editing Input Erro" error="Erro desconhecido Editing Input Erro" value="Editing Input" />
        {/*   <Input mode="editing" />
        <Input mode="showing" /> */}
      </SampleStatused>
    </section>
  </Container>
);

export default Components;

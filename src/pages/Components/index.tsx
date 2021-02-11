import React from 'react';
import Button from '../../components/Button';
import Status from '../../components/Status';
import SampleStatus from '../../components/SampleStatus';
import {
  Container, Buttons, Statuses, SampleStatused,
} from './styles';

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
  </Container>
);

export default Components;

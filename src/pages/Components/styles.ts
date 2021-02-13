import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 50px;
  height: 100%;
  background: ${(props) => props.theme.colors.mainBackground};
  flex-wrap: wrap;

  h2 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.font.secondary};
    font-weight: 200;
  }

  button + button {
    margin-top: 30px;
  }

  & > section {
    display: flex;
  }

  section + section {
    margin-left: 50px;
  }

`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const Statuses = styled.div`
  > div + div {
    margin-top: 15px;
  }
`;

export const SampleStatused = styled.div`
  > div + div {
    margin-top: 15px;
  }

  h3 {
    display: block;
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;

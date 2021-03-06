import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 50px;
  height: 100%;
  background: ${(props) => props.theme.colors.mainBackgroundDarked};
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

export const ProgressesBar = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 10px;
  }

`;

export const TableDemo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-left: 30px;
  background-color: ${(props) => props.theme.colors.mainBackgroundDarked};
  padding: 10px;
`;

export const FlexBreak = styled.div`
  display: flex;
  width: 100%;
`;

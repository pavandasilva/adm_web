import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackgroundDarked};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  > header {
    display: flex;
    justify-content: flex-end;
    height: 60px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.mainBackground};
    box-shadow: inset 19px -4px 26px -24px rgba(0,0,0,0.2);
    padding-right: 36px;

    > div {
      display: flex;
      position: relative;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      width: 100px;
      cursor: pointer;

      > svg {
        fill: ${(props) => props.theme.colors.font.tertiary};
        width: 26px;
        height: 26px;
      }
    }
  }
`;

export const Body = styled.div`
  height: 100%;
`;

export const Alert = styled.div`
  position: absolute;
  top: 22px;
  right: 5px;
  height: 8px;
  width: 8px;
  padding: 1px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.danger}
`;

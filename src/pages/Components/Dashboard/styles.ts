import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 7px;

  > div {
    display: flex;
    flex: 1.35;
  }

  > aside {
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.mainBackground};
  border-radius: 4px;
  height: 70px;
  padding: 16px 24px;
  min-width: 240px;
  overflow: hidden;

  + div {
    margin-top: 7px;
  }

  h3 {
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 1.4px;
  }

  p {
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1px;
    color:${(props) => props.theme.colors.font.secondary};
    margin-left: -6px;

    svg {
      width: 22px;
      height: auto;
      fill:${(props) => props.theme.colors.font.secondary};
    }
  }
`;

export const BankAccounts = styled.div`
  background-color: ${(props) => props.theme.colors.mainBackground};
  width: 100%;
  margin-left: 8px;
  border-top: 16px solid  ${(props) => props.theme.colors.mainBackground};
  border-bottom: 16px solid  ${(props) => props.theme.colors.mainBackground};
  padding: 0px 24px;
  border-radius: 4px;
  height: 378px;
  overflow: auto;

  > h3 {
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 1.3px;
  }
`;

export const Account = styled.div`
  padding: 15px 0px;

  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};

  > p {
    color: ${(props) => props.theme.colors.font.secondary};
    font-size: 12px;
    letter-spacing: 1.2px;
    line-height: 19px;
  }

  > footer {
    display: flex;
    align-items: center;
    margin-top: 12px;
    width: 100%;
    font-size: 12px;
    letter-spacing: 1.2px;
    justify-content: space-between;

    > h4 {
      color: ${(props) => props.theme.colors.font.quintenary};
      font-weight: normal;
      font-size: 12px;
      letter-spacing: 1.2px;
    }

    > strong {
      font-size: 12px;
      letter-spacing: 1.1px;
      color: ${(props) => props.theme.colors.font.primary};
    }
  }

`;

export const Balance = styled.div`
  > span {
    display: block;
    font-size: 10px;
    color: ${(props) => props.theme.colors.font.tertiary};
    letter-spacing: 1px;
    width: 50px;
    flex-wrap: wrap;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 7px;

  > aside {
    display: flex;
    flex-direction: row;
    width: 600px;
    height: 100%;
  }
`;

export const FixedHeader = styled.div`

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

export const Main = styled.div`
  padding: 15px 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 7px;
  border-radius: 4px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.mainBackground};
  justify-content: flex-start;

   & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.mainBackground};
    height: 30px;

    > aside {
      display: flex;
      width: 350px;
      justify-content: flex-end;
    }

    h2 {
      font-size: 13px;
      letter-spacing: 1.3px;
      font-weight: 500;
    }
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 7px 0px;

`;

export const Bars = styled.div`
  width: 100%;
  margin-top: 7px;


  div + div {
    margin-top: 8px;
  }
`;

export const Accounts = styled.div`
  margin-top: 19px;
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 19px 0px;
  height: 100%;
  overflow: auto;

  div + div {
    margin-top: 18px;
  }
`;

export const AccountCard = styled.div`
  display: flex;
  height: 126px;
  background: ${(props) => props.theme.colors.mainBackground};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 18px;

  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${(props) => props.theme.colors.font.secondary};

    > h2 {
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 1.4px;
      color: ${(props) => props.theme.colors.font.primary};
    }

    > p {
      font-size: 12px;
      line-height: 22px;
      letter-spacing: 1.2px;

      > strong {
        font-size: 12px;
        font-weight: normal;
        color: ${(props) => props.theme.colors.font.primary};
      }
    }

    > span {
      font-size: 12px;
      line-height: 19px;
      letter-spacing: 1.2px;
      color: ${(props) => props.theme.colors.font.primary};
    }
  }

  & > aside {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    width: 100px;
  }
`;

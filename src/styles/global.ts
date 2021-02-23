import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 13px;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.mainBackground};
      border-radius: 2px;
      margin-top: 5px;
      margin-bottom: 15px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.mainBackgroundDarked};
      border-radius: 2px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.font.tertiary};
    }
  }

  body {
    background: ${(props) => props.theme.colors.mainBackgroundDarked};
    color: ${(props) => props.theme.colors.font.primary};
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;

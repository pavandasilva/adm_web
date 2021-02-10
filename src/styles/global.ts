import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
  }

  body {
    background: ${props => props.theme.colors.mainBackgroundDarked};
    color: ${props => props.theme.colors.font.primary};
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
  }

  button {
    cursor: pointer;
    border: none;
  }
`

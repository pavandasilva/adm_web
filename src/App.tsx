import React from 'react';
import { ThemeProvider } from 'styled-components'
import Components from './pages/Components';
import { GlobalStyle} from './styles/global'
import { lightTheme } from './styles/themes/lightTheme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Components />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App

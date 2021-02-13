import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import Components from './pages/Components';
import { GlobalStyle } from './styles/global';
import { lightTheme } from './styles/themes/lightTheme';
import store from './store';

const App = () => (
  <>
    <ReduxProvider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Components />
        <GlobalStyle />
      </ThemeProvider>
    </ReduxProvider>
  </>
);

export default App;

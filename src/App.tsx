import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { GlobalStyle } from './styles/global';
import { lightTheme } from './styles/themes/lightTheme';
import store from './store';
import DefaultLayout from './components/DefaultLayout';

const App = () => (
  <>
    <ReduxProvider store={store}>
      <ThemeProvider theme={lightTheme}>
        {/* <Components /> */}

        <DefaultLayout>ola</DefaultLayout>
        <GlobalStyle />
      </ThemeProvider>
    </ReduxProvider>
  </>
);

export default App;

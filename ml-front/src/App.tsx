import React, { useEffect } from 'react';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { AppStore, persistor } from './store';
import { AppRoutes } from './routes';
import { apiClient } from './services';
import { styledTheme } from './helpers/theme-style-components';

function App() {
  useEffect(() => {
    apiClient.buildServices();
  }, []);
  return (
    <HelmetProvider context={{}}>
      <Provider store={AppStore}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={styledTheme}>
            <AppRoutes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
}

export default App;

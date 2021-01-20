import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppStore } from '../store';
import { styledTheme } from './theme-style-components';

interface Props {
  children: React.ReactNode;
}

export const TestingMock = ({ children }: Props) => {
  return (
    <ThemeProvider theme={styledTheme}>
      <Provider store={AppStore}>{children}</Provider>
    </ThemeProvider>
  );
};

/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { styledTheme } from './theme-style-components';

type AppTheme = typeof styledTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

declare global {
  type FontWeight = 'bold' | 'normal' | 'regular' | 700;
}

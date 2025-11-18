import React from 'react';
import { createTheme, ThemeProvider as ThemeProviderBase } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export enum Color {
  Inherit = 'inherit',
  DarkBlue = '#071d41',
  Blue = '#67DAFD',
  LightBlue = '#E1F8FF',
  LightGreen = '#ACFFA4',
  DarkGreen = '#11CF7F',
}

export enum BaseColor {
  DarkBlue = Color.DarkBlue,
  LightBlue = Color.LightBlue,
}

export const theme = createTheme({
  typography: {
    fontFamily: 'DMSans-Light',
  },
  palette: {
    primary: {
      main: BaseColor.DarkBlue,
    },
    secondary: {
      main: BaseColor.LightBlue,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: 'var(--color-light-blue)',
          backgroundColor: 'var(--color-primary)',
        },
      },
    },
  },
});

export const Provider: React.FC<Props> = ({ children }) => (
  <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
);

export default { theme, Provider };

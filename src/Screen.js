import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TemporaryDrawer } from './components/drawer';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const className = 'base-screen';

export const Screen = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Grid container className={className}>
      <Container>
        <TemporaryDrawer />
        {children}
      </Container>
    </Grid>
  </ThemeProvider>
);

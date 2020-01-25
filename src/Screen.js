import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TemporaryDrawer } from './components/drawer';

const className = 'base-screen';

export const Screen = ({ children }) => (
  <div>
    <CssBaseline />
    <Grid container className={className}>
      <Container>
        <TemporaryDrawer />
        {children}
      </Container>
    </Grid>
  </div>
);

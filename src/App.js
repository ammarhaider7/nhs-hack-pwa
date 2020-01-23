import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Container, Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import SimpleExpansionPanel from './components/simple-expansion-panel';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Grid container spacing={2}>
      <Container>
        <Box mt={2}>
          <Button variant="contained" color="primary">
            Hello World
            </Button>
        </Box>
        <Box mt={2}>
          <SimpleExpansionPanel />
        </Box>
      </Container>
    </Grid>
  </ThemeProvider>
)


import React from 'react';
import Button from '@material-ui/core/Button';
import { Container, Box, Grid } from '@material-ui/core';

export default () => (
  <Grid container spacing={2}>
    <Container>
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Box>
    </Container>
  </Grid>

)

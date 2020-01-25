import React from 'react';
import { Box, Typography, Button, Grid } from '@material-ui/core';

import { DeviceOrientation } from '../../components/device-orientation.component';
import { Screen } from '../../Screen';

import '../../App.scss';

export function Measure() {

  const formatAngleData = (val) => {
    return Number(val).toFixed(0);
  }

  return (
    <Screen>
      <Box mt={2}>
        <Typography variant="h5">
          Take Measurement
          </Typography>
      </Box>
      <Box mt={15}>
        <DeviceOrientation>
          {({ beta }) => (
            <Box>
              <Typography variant="h1" component="h1" align='center'>
                {`${formatAngleData(beta)}°`}
              </Typography>
            </Box>
          )}
        </DeviceOrientation>
      </Box>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Box mt={10}>
          <Button
            variant="contained"
            label="device-angles"
            value="device-angles"
          >
            Set zero
          </Button>
        </Box>
      </Grid>
    </Screen>
  );
}

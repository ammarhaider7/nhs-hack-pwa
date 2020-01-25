import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@material-ui/core';

import { DeviceOrientation } from '../../components/device-orientation.component';
import { Screen } from '../../Screen';
import { LocalDeviceStorage } from '../../services/local-device-storage';

import '../../App.scss';

export function Measure() {

  const formatAngleData = (val) => {
    if (!zeroAngleSet) return Number(val).toFixed(0);
    return Number(val).toFixed(0) - zeroAngle;
  }

  const [zeroAngle, setZeroAngle] = useState('');
  const [zeroAngleSet, setZeroAngleSet] = useState(false);

  const getZeroAngleFromStorage = async () => {
    const data = await LocalDeviceStorage.get('zeroAngle');
    return setZeroAngle(data);
  }

  const handleSetZeroClick = () => {
    LocalDeviceStorage.set('zeroAngle');
    setZeroAngleSet(true);
  }

  getZeroAngleFromStorage();

  return (
    <Screen>
      <Box mt={2}>
        <Typography variant="h5">
          Take Measurement
        </Typography>
      </Box>
      <Typography>{`zero angle: ${zeroAngle}`}</Typography>
      <Box mt={13}>
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
            onClick={handleSetZeroClick}
          >
            Set zero
          </Button>
        </Box>
      </Grid>
    </Screen>
  );
}

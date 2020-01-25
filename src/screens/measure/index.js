import React, { useState } from 'react';
import { Box, Typography, Button, Grid, makeStyles } from '@material-ui/core';

import { DeviceOrientation } from '../../components/device-orientation.component';
import { Screen } from '../../Screen';
import { LocalDeviceStorage } from '../../services/local-device-storage';

import '../../App.scss';

export function Measure() {

  const useStyles = makeStyles(theme => ({
    hidden: {
      display: 'none',
    }
  }));

  const classes = useStyles();

  const formatAngleData = (val) => {
    const formattedAngle = Number(val).toFixed(0);
    if (!zeroAngleSet) return formattedAngle;
    return formattedAngle - zeroAngle;
  }

  const [zeroAngle, setZeroAngle] = useState('');
  const [zeroAngleSet, setZeroAngleSet] = useState(false);
  const [beta, setBeta] = useState('');

  const getZeroAngleFromStorage = async () => {
    const data = await LocalDeviceStorage.get('zeroAngle');
    return data;
  }

  const handleSetZeroClick = () => {
    setZeroAngle(beta);
    LocalDeviceStorage.set('zeroAngle', beta);
    setZeroAngleSet(true);
  }

  const handleFinaliseClick = () => {
    
  }

  getZeroAngleFromStorage();

  return (
    <Screen>
      <Box mt={2}>
        <Typography variant="h5">
          Take Measurement
        </Typography>
      </Box>
      <Box mt={10}>
        <DeviceOrientation>
          {({ beta }) => {
            setBeta(formatAngleData(beta));
            return (
              <Box>
                <Typography variant="h1" component="h1" align='center' className={zeroAngleSet ? 'txt-green' : ''}>
                  {`${formatAngleData(beta)}°`}
                </Typography>
              </Box>
            )
          }}
        </DeviceOrientation>
      </Box>
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Box mt={10}>
          <Button
            variant="contained"
            label="set-zero"
            value="set-zero"
            onClick={handleSetZeroClick}
            className={zeroAngleSet ? classes.hidden : ''}
          >
            Set zero & start motion
          </Button>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              label="finalise-measurement"
              value="finalise-measurement"
              onClick={handleFinaliseClick}
              style={{justifyContent: 'center'}}
              className={!zeroAngleSet ? classes.hidden : ''}
            >
              Finalise
            </Button>
          </Box>
        </Box>
      </Grid>
    </Screen>
  );
}

import React, { useState } from 'react';
import { Box, Typography, Button, Grid, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

import { DeviceOrientation } from '../../components/device-orientation.component';
import { Screen } from '../../Screen';
import { LocalDeviceStorage } from '../../services/local-device-storage';

import '../../App.scss';
import { useHistory } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export function Measure() {

  const useStyles = makeStyles(theme => ({
    hidden: {
      display: 'none',
    }
  }));

  const classes = useStyles();

  const formatAngleData = (val) => {
    const formattedAngle = Number(val).toFixed(0);
    return formattedAngle;
  }

  const adjustForZeroAngle = () => {
    if (!zeroAngleSet) return beta;
    return formatAngleData(beta) - zeroAngle;
  }

  const [zeroAngle, setZeroAngle] = useState('');
  const [zeroAngleSet, setZeroAngleSet] = useState(false);
  const [beta, setBeta] = useState('');

  const getZeroAngleFromStorage = async () => {
    const data = await LocalDeviceStorage.get('zeroAngle');
    return data;
  }

  const handleSetZeroClick = () => {
    const formattedBeta = formatAngleData(beta);
    setZeroAngle(formattedBeta);
    LocalDeviceStorage.set('zeroAngle', formattedBeta);
    setZeroAngleSet(true);
  }

  const history = useHistory();

  const handleFinaliseClick = async () => {
    await LocalDeviceStorage.set('initialRange', formatAngleData(beta) - zeroAngle);
    history.push('/set-target');
  }

  getZeroAngleFromStorage();

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <Box mt={2}>
          <Typography variant="h5">
            Take Measurement
        </Typography>
        </Box>
        <Box mt={10}>
          <DeviceOrientation>
            {({ beta }) => {
              const formattedBeta = formatAngleData(beta)
              setBeta(formattedBeta);
              return (
                <Box>
                  <Typography variant="h1" component="h1" align='center' className={zeroAngleSet ? 'txt-green' : ''}>
                    {`${adjustForZeroAngle()}°`}
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
                style={{ justifyContent: 'center' }}
                className={!zeroAngleSet ? classes.hidden : ''}
              >
                Ok & configure target
            </Button>
            </Box>
          </Box>
        </Grid>
      </Screen>
    </ThemeProvider>
  );
}

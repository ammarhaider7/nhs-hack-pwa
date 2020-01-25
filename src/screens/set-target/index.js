import React, { useState } from 'react';
import { Box, Typography, Slider, Grid, Input, makeStyles } from '@material-ui/core';

import { LocalDeviceStorage } from '../../services/local-device-storage';

import { Screen } from '../../Screen';

import '../../App.scss';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export function SetTarget() {

  const classes = useStyles();
  const [initialRange, setInitialRange] = useState('');
  const [value, setValue] = React.useState(0);

  const getInitialRange = async () => {
    const range = await LocalDeviceStorage.get('initialRange');
    setInitialRange(range);
  }

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < -90) {
      setValue(-90);
    } else if (value > 90) {
      setValue(90);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  getInitialRange();

  function valuetext(value) {
    return `${value}°`;
  }

  return (
    <Screen>
      <Box mt={2}>
        <Typography variant="h4">
          Configure target range
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Initial Range
        </Typography>
        <Typography variant="body1" gutterBottom>
          {initialRange}°
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Target limit (°)
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              min={-90}
              max={90}
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: -90,
                max: 90,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Screen>
  );
}

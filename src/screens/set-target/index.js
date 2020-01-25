import React, { useState } from 'react';
import { Box, Typography, Slider, Grid, Input, makeStyles, Button, withStyles } from '@material-ui/core';

import { LocalDeviceStorage } from '../../services/local-device-storage';

import { Screen } from '../../Screen';

import '../../App.scss';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

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

  const history = useHistory();

  function handleSave() {
    LocalDeviceStorage.set('targetLimit', value);
    history.push('/');
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
            <PrettoSlider
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
        <Grid
          container
          direction="row"
          justify="center"
        >
          <Box mt={20}>
            <Button variant="contained" color="primary"
              onClick={handleSave}
              label="Home"
              value="Home"
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Box>
    </Screen>
  );
}

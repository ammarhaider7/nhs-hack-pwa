import React, { useState } from 'react';
import { Box, Typography, Slider, Grid, Button, withStyles } from '@material-ui/core';

import { Screen } from '../../Screen';

import '../../App.scss';
import { useHistory } from 'react-router-dom';
import { ExerciseService } from '../../services/exercise';

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

  const [initialRange, setInitialRange] = useState('');
  const [value, setValue] = React.useState([-10, 10]);

  const getInitialRange = async () => {
    const range = await ExerciseService.getInitialRange();
    setInitialRange(range);
  }

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  getInitialRange();

  function valuetext(value) {
    return `${value}°`;
  }

  const history = useHistory();

  async function handleSave() {
    await ExerciseService.setTargetUpperLimit(value[1]);
    await ExerciseService.setTargetLowerLimit(value[0]);
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
          Set target range limits
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <PrettoSlider
              defaultValue={0}
              getAriaValueText={valuetext}
              step={1}
              min={-180}
              max={180}
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
              value={value}
              aria-labelledby="range-slider"
            />
          </Grid>
        </Grid>
        <Grid
          mt={2}
          container
          direction="row"
          justify="center"
        >
          <Box>
            <Typography variant="body2" gutterBottom>
                Target range set between <strong>{value[0]}°</strong> and <strong>{value[1]}</strong>°
            </Typography>
          </Box>
          <Box mt={15}>
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

import React, { Component } from 'react';
import { Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { Screen } from '../../Screen';

import '../../App.scss';
import SimpleSelect from '../../components/select';

export class CreateExercise extends Component {

  render() {
    return (
      <Screen>
        <Box mt={2}>
          <Typography variant="h4">
            Create Exercise
          </Typography>
        </Box>
        <Box mt={2}>
          <SimpleSelect />
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary"
            component={Link}
            to="/measure"
            label="measure"
            value="measure"
          >
            Measure initial
          </Button>
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary"
            component={Link}
            to="/device-angles"
            label="device-angles"
            value="device-angles"
          >
            Device Angles
          </Button>
        </Box>
      </Screen>
    );
  }
}

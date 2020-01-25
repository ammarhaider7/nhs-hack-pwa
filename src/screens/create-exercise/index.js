import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { Screen } from '../../Screen';

import '../../App.scss';

export class CreateExercise extends Component {

  render() {
    return (
      <Screen>
        <Box mt={2}>

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

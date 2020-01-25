import React, { Component } from 'react';
import { Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

import { Screen } from '../../Screen';

import '../../App.scss';
export class Home extends Component {

  render() {
    return (
      <Screen>
        <Box mt={2}>
          <Typography variant="h4">
            Home
          </Typography>
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary"
            component={Link}
            to="/create-exercise"
            label="create-exercise"
            value="create-exercise"
            startIcon={<AddIcon />}
          >
            Create exercise
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

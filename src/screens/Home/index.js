import React, { Component } from 'react';
import { Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra';

import { Screen } from '../../Screen';

import '../../App.scss';
import { LocalDeviceStorage } from '../../services/local-device-storage';
export class Home extends Component {

  doesExerciseExist = async () => {
    const isExercise = await LocalDeviceStorage.get('targetUpperLimit');
    this.setState({
      isExercise: !!isExercise
    })
  }

  componentWillMount() {
    this.doesExerciseExist();
  }

  state = {
    isExercise: false
  }

  render() {
    return (
      <Screen>
        <Box mt={2}>
          <Typography variant="h4">
            Home
          </Typography>
        </Box>
        <Box mt={2}>
          {this.state.isExercise ?           
            <Button variant="contained" color="secondary"
              component={Link}
              to="/perform-exercise"
              label="perform-exercise"
              value="perform-exercise"
              startIcon={<AirlineSeatLegroomExtraIcon />}
            >
              Perform exercise
            </Button>
            : null
          }
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
      </Screen>
    );
  }
}

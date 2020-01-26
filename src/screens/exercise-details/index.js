import React, { Component } from 'react';
import { Box, Typography, Chip, Button } from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import DirectionsIcon from '@material-ui/icons/Directions';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';

import { Screen } from '../../Screen';

import '../../App.scss';

import { ExerciseService } from '../../services/exercise';
import { createBrowserHistory } from 'history';

export class ExerciseDetails extends Component {


  componentWillMount = async () => {
    const exercise = await ExerciseService.getExercise();
    this.setState({
      exercise
    });
  }

  state = {
    exercise: {}
  }

  handleClick(e) {
    const history = createBrowserHistory();
    history.push('/#/perform-exercise');
  }

  render() {
    const { 
      joint,
      directionOfMotion,
      targetUpperLimit,
      targetLowerLimit
     } = this.state.exercise;
    return (
      <Screen>
        <Box mt={2}>
          <Typography variant="h4">
            Exercise details
          </Typography>
        </Box>
        <Box mt={2}>
          <Chip
            icon={<AccessibilityNewIcon />}
            label={joint}
            color="primary"
          />
        </Box>
        <Box mt={2}>
        <Chip
            icon={<DirectionsIcon />}
            label={`Direction of motion: ${directionOfMotion}`}
            color="primary"
          />
        </Box>
        <Box mt={2}>
        <Chip
            icon={<ThumbUpIcon />}
            label={`Target range lower limit: ${targetLowerLimit}°`}
            color="primary"
          />
        </Box>
        <Box mt={2}>
        <Chip
            icon={<PriorityHighIcon />}
            label={`Target range upper limit: ${targetUpperLimit}°`}
            color="primary"
          />
        </Box>
        <Box mt={10}>
          <Button variant="contained" color="secondary"
            component={Link}
            to="/perform-exercise"
            label="perform-exercise"
            value="perform-exercise"
            startIcon={<PlayArrowIcon />}
          >
            Start
          </Button>
        </Box>
      </Screen>
    );
  }
}

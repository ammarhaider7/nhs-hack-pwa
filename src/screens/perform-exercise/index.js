import React, { useState } from 'react';
import { Box, Typography, makeStyles, createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

import { DeviceOrientation } from '../../components/device-orientation.component';
import { Screen } from '../../Screen';

import '../../App.scss';
import { useHistory } from 'react-router-dom';
import { ExerciseService } from '../../services/exercise';
import { Game } from '../../components/game';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export function PerformExercise() {

  return (
    // <ThemeProvider theme={theme}>
    <div>
      <CssBaseline />
      <Game></Game>
    </div>

    // </ThemeProvider>
  );
}

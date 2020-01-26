import React, { useState } from 'react';
import { Box, Typography, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

import { DeviceOrientation } from '../../components/device-orientation.component';
import { Screen } from '../../Screen';

import '../../App.scss';
import { useHistory } from 'react-router-dom';
import { ExerciseService } from '../../services/exercise';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export function PerformExercise() {

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        
      </Screen>
    </ThemeProvider>
  );
}

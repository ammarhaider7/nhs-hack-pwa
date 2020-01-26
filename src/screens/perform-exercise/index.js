import React from 'react';
import { CssBaseline } from '@material-ui/core';

import '../../App.scss';
import { Game } from '../../components/game';

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

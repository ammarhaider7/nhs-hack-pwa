import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import { LocalDeviceStorage } from '../../services/local-device-storage';

import { Screen } from '../../Screen';

import '../../App.scss';
export function SetTarget () {

  const [initialRange, setInitialRange] = useState('');

  const getInitialRange = async () => {
    const range = await LocalDeviceStorage.get('initialRange');
    setInitialRange(range);
  }

  getInitialRange();

  return (
    <Screen>
      <Box mt={2}>
        <Typography variant="h4">
          Configure target range
        </Typography>
      </Box>
      <Box mt={2}>
        Initial range: {initialRange}
      </Box>
      <Box mt={2}>
      </Box>
    </Screen>
  );
}

import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { Screen } from '../../Screen';
import { DeviceOrientation } from '../../components/device-orientation.component';
import './About.scss';

export class DeviceAngles extends Component {

  formatAngleData(val) {
    return Number(val).toFixed(2);
  }

  render() {
    return (
      <Screen>
        <Box>
          <p>Device Angles</p>
        </Box>
        <Box mt={1}>
          <DeviceOrientation>
            {({ absolute, alpha, beta, gamma, errMsg, isSupported }) => (
              <Box>
                <Typography variant="h5" component="h5">
                  {`Absolute: ${absolute}`}
                </Typography>
                <Typography variant="h3" component="h3">
                  {`Alpha: ${this.formatAngleData(alpha)}`}
                </Typography>
                <Typography variant="h3" component="h3">
                  {`Beta: ${this.formatAngleData(beta)}`}
                </Typography>
                <Typography variant="h3" component="h3">
                  {`Gamma: ${this.formatAngleData(gamma)}`}
                </Typography>
                <Typography variant="h5" component="h5">
                  {`isSupported: ${isSupported}`}
                </Typography>
                <Typography variant="h5" component="h5">
                  {`Err: ${errMsg}`}
                </Typography>
              </Box>
            )}
          </DeviceOrientation>
        </Box>
      </Screen>
    );
  }
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box, TextField } from '@material-ui/core';

import { LocalDeviceStorage } from '../services/local-device-storage';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [joint, setJoint] = React.useState('');
  const [directionOfMotion, setDirectionOfMotion] = React.useState('');
  const [instructions, setInstructions] = React.useState('');

  const handleJointChange = event => {
    const { value } = event.target;
    setJoint(value);
    LocalDeviceStorage.set('joint', value)
  };

  const handledirectionOfMotionChange = event => {
    const { value } = event.target;
    setDirectionOfMotion(value);
    LocalDeviceStorage.set('directionOfMotion', value)
  }

  const handleInstructionChange = event => {
    const { value } = event.target;
    setInstructions(value);
    LocalDeviceStorage.set('instructions', value)
  }

  return (
    <div>
      <Box mt={2}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Joint</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-joint"
            value={joint}
            onChange={handleJointChange}
          >
            <MenuItem value={'Elbow'}>Elbow</MenuItem>
            <MenuItem value={'Knee'}>Knee</MenuItem>
            <MenuItem value={'Shoulder'}>Shoulder</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={2}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Direction of motion</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-direction"
            value={directionOfMotion}
            onChange={handledirectionOfMotionChange}
          >
            <MenuItem value={'Extension'}>Extension</MenuItem>
            <MenuItem value={'Flexion'}>Flexion</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={2} ml={1}>
        <TextField id="standard-basic" label="Instructions" value={instructions} onChange={handleInstructionChange} />
      </Box>
    </div>
  );
}

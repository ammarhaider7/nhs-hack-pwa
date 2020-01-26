import { LocalDeviceStorage } from './local-device-storage';

export const ExerciseService = {
  createNewExercise: async () => {
    return await LocalDeviceStorage.set('exercise', {});
  },
  getExercise: async () => {
    return await LocalDeviceStorage.get('exercise');
  },
  encodeExerciseData: async () => {
    const exercise = await LocalDeviceStorage.get('exercise');
    return btoa(JSON.stringify(exercise));
  },
  decodeExerciseData: async (base64EncodedData) => {
    const exercise = atob(base64EncodedData);
    return JSON.parse(exercise);
  },
  setJoint: async (joint) => {
    const blob = await LocalDeviceStorage.get('exercise');
    const newBlob = {
      ...blob,
      joint
    }
    return await LocalDeviceStorage.set('exercise', newBlob);
  },
  getJoint: async () => {
    const blob = await LocalDeviceStorage.get('exercise');
    return blob['joint'];
  },
  setDirectionOfMotion: async (directionOfMotion) => {
    const blob = await LocalDeviceStorage.get('exercise');
    const newBlob = {
      ...blob,
      directionOfMotion
    }
    return await LocalDeviceStorage.set('exercise', newBlob);
  },
  getDirectionOfMotion: async () => {
    const blob = await LocalDeviceStorage.get('exercise');
    return blob['directionOfMotion'];
  },
  setInitialRange: async (initialRange) => {
    const blob = await LocalDeviceStorage.get('exercise');
    const newBlob = {
      ...blob,
      initialRange
    }
    return await LocalDeviceStorage.set('exercise', newBlob);
  },
  getInitialRange: async () => {
    const blob = await LocalDeviceStorage.get('exercise');
    return blob['initialRange'];
  },
  setZeroAngle: async (zeroAngle) => {
    const blob = await LocalDeviceStorage.get('exercise');
    const newBlob = {
      ...blob,
      zeroAngle
    }
    return await LocalDeviceStorage.set('exercise', newBlob);
  },
  getZeroAngle: async () => {
    const blob = await LocalDeviceStorage.get('exercise');
    return blob['zeroAngle'];
  },
  setTargetLowerLimit: async (targetLowerLimit) => {
    const blob = await LocalDeviceStorage.get('exercise');
    const newBlob = {
      ...blob,
      targetLowerLimit
    }
    return await LocalDeviceStorage.set('exercise', newBlob);
  },
  getTargetLowerLimit: async () => {
    const blob = await LocalDeviceStorage.get('exercise');
    return blob['targetLowerLimit'];
  },
  setTargetUpperLimit: async (targetUpperLimit) => {
    const blob = await LocalDeviceStorage.get('exercise');
    const newBlob = {
      ...blob,
      targetUpperLimit
    }
    return await LocalDeviceStorage.set('exercise', newBlob);
  },
  getTargetUpperLimit: async () => {
    const blob = await LocalDeviceStorage.get('exercise');
    return blob['targetUpperLimit'];
  },
}
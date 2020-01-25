import localforage from 'localforage';

export const LocalDeviceStorage = {
  get(item) {
    return localforage.getItem(item);
  },
  set(item, value) {
    return localforage.setItem(item, value);
  }
}
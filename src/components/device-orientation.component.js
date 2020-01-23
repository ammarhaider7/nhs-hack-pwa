import { Component } from 'react';
import PropTypes from 'prop-types';

export class DeviceOrientation extends Component {
  static propTypes = {
    children: PropTypes.func,
  };

  static defaultProps = {
    children: () => null,
  };

  state = {
    absolute: true,
    alpha: 0,
    beta: 0,
    gamma: 0,
    isSupported: '',
    errMsg: 'none'
  };

  handleOrientation = event => {
    const { absolute, alpha, beta, gamma } = event;

    this.setState({ absolute, alpha, beta, gamma });
  };

  componentDidMount() {
    if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
      // DeviceOrientationEvent supported
      console.log('DeviceOrientationEvent supported');
      this.setState({
        isSupported: 'Yes'
      });
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS 13+
        console.log('Requesting permission to use deviceorientation');
        DeviceOrientationEvent.requestPermission()
          .then(response => {
            if (response === 'granted') {
              this.listenToDeviceOrientationEvents();
            }
          })
          .catch((err) => {
            console.error(err);
            this.setState({
              errMsg: `iOS 13+: error requesting permission: ${JSON.stringify(err)}`
            });
          });
      } else {
        // non iOS 13+
        this.listenToDeviceOrientationEvents();
      }
    } else {
      // DeviceOrientationEvent NOT supported
      console.log('DeviceOrientationEvent NOT supported');
      this.setState({
        isSupported: 'No'
      });
    }
  }

  listenToDeviceOrientationEvents = () => {
    console.log('Adding event deviceorientation listener');
    window.addEventListener('deviceorientation', this.handleOrientation, true);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'deviceorientation',
      this.handleOrientation,
      true
    );
  }

  render() {
    return this.props.children(this.state);
  }
}
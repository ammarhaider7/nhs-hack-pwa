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
  };

  handleOrientation = event => {
    const { absolute, alpha, beta, gamma } = event;

    this.setState({ absolute, alpha, beta, gamma });
  };

  componentDidMount() {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      // iOS 13+
      DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', this.handleOrientation, true);
          }
        })
        .catch(console.error)
    } else {
      // non iOS 13+
      window.addEventListener('deviceorientation', this.handleOrientation, true);
    }
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
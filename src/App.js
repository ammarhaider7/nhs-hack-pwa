  
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Home } from './screens/Home';
import { DeviceAngles } from './screens/DeviceAngles';

import { AnimatedSwitch, spring } from 'react-router-transition';

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
}

// function slide(val) {
//   return spring(val, {
//     stiffness: 125,
//     damping: 16,
//   });
// }

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

export default () => (
  <Router basename={null}>
    <Route render={({ location }) => (
      <div>
        <AnimatedSwitch
          {...pageTransitions}
          runOnMount={location.pathname === '/'}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`,
          })}
        >
          <Route path="/" exact component={Home} />
          <Route path="/device-angles" component={DeviceAngles} />
        </AnimatedSwitch>
      </div>
    )} />
  </Router>
)

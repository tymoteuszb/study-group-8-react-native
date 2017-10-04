import React, { PureComponent, PropTypes } from 'react';
import { Animated } from 'react-native';

import styles from './Styles/SlidesNavigationIndicatorStyles';

export default class SlidesNavigationIndicator extends PureComponent {

  static propTypes = {
    color: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Animated.View style={[styles.indicator, { backgroundColor: this.props.color }]} />
    );
  }
}

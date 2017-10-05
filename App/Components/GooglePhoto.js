import React, { PureComponent, PropTypes } from 'react'
import { Animated, Easing } from 'react-native'
import { ifElse, always, propEq } from 'ramda'

import styles from './Styles/GooglePhoto';

export default class GooglePhoto extends PureComponent {
  static propTypes = {
    source: PropTypes.object,
    resizeMode: PropTypes.string.isRequired,
    style: PropTypes.any,
    containerStyle: PropTypes.any
  };

  static defaultProps = {
    resizeMode: 'cover',
    style: {},
    containerStyle: {},
  };

  state = {
    opacity: new Animated.Value(0),
    canRender: false,
  };

  onLoad = () => Animated.timing(this.state.opacity, {
    toValue: 1,
    duration: 300,
    easing: Easing.ease,
  }).start();

  handleLayout = () => this.setState({ canRender: true });

  get image() {
    return ifElse(
      propEq('canRender', true),
      () => <Animated.Image
        style={[this.props.style, { opacity: this.state.opacity }]}
        resizeMode={this.props.resizeMode}
        source={this.props.source}
        onLoad={this.onLoad}
      />,
      always(null),
    )(this.state);
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          this.props.containerStyle
        ]}
         onLayout={this.handleLayout}
      >
        {this.image}
      </Animated.View>
    );
  }
}
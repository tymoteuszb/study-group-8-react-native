import React, { PureComponent } from 'react'
import { ScrollView, View, Animated, TouchableOpacity, Easing } from 'react-native'
import { Metrics } from '../Themes'
import Map from './Map';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { ifElse, propEq, always } from 'ramda';

import styles from './Styles/Main'

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const collapsedMapHeight = 200;
const expandedMapHeight = Metrics.screenHeight;

export default class Main extends PureComponent {
  state = {
    expanded: false,
    mapHeight: new Animated.Value(collapsedMapHeight)
  }

  toggleMapHeight = () => {
    Animated.timing(
      this.state.mapHeight,
      {
        toValue: ifElse(
          propEq('expanded', true),
          always(collapsedMapHeight),
          always(expandedMapHeight),
        )(this.state),
        easing: Easing.ease,
        duration: 500
      }
    ).start();
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    const rotateZ = this.state.mapHeight.interpolate({
      inputRange: ([collapsedMapHeight - 1, collapsedMapHeight, expandedMapHeight, expandedMapHeight + 1]),
      outputRange: (['0deg', '0deg', '180deg', '180deg']),
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.map, { height: this.state.mapHeight }]}>
          <Map />
          <View style={styles.mapToggleWrapper}>
            <TouchableOpacity onPress={this.toggleMapHeight}>
              <AnimatedIcon
                style={{ transform: [{ rotateZ }] }}
                name="expand-more"
                size={45}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <ScrollView style={styles.content}>

        </ScrollView>
      </View>
    )
  }
}

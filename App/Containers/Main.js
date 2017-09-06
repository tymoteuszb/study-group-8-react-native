import React, { PureComponent } from 'react'
import { ScrollView, Text, Image, View, Animated, TouchableOpacity, Easing } from 'react-native'
import { Metrics } from '../Themes'
import Map from './Map';

// Styles
import styles from './Styles/Main'

const collapsedMapHeight = 200;
const expandedMapHeight = Metrics.screenHeight;
const MAP_ANIMATION_CONFIG = {
  easing: Easing.ease,
  duration: 300
}

export default class Main extends PureComponent {
  state = {
    mapHeight: new Animated.Value(expandedMapHeight)
  }

  collapseMap = () => Animated.timing(
    this.state.mapHeight,
    {
      toValue: collapsedMapHeight,
      ...MAP_ANIMATION_CONFIG
    }
  ).start();

  expandMap = () => Animated.timing(
    this.state.mapHeight,
    {
      toValue: expandedMapHeight,
      ...MAP_ANIMATION_CONFIG
    }
  ).start();

  render () {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.map, { height: this.state.mapHeight }]}>
          <Map />
          <View style={styles.mapSwitch}>
            <TouchableOpacity onPress={this.expandMap}><Text>Expand</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.collapseMap}><Text>Collapse</Text></TouchableOpacity>
          </View>
        </Animated.View>
        <ScrollView style={styles.content}>
        </ScrollView>
      </View>
    )
  }
}

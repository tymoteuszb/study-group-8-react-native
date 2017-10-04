import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Animated, TouchableOpacity, Easing } from 'react-native'
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { ifElse, propEq, always, identity, not } from 'ramda';

import styles from './Styles/Main'
import { Metrics, Colors } from '../Themes'
import Map from './Map';
import SlidesNavigation from '../Components/SlidesNavigation';
import Menu from '../Components/Menu';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const collapsedMapHeight = 300;
const expandedMapHeight = Metrics.screenHeight;

const PLACES_TAB_KEY = 'places';
const MENU_TAB_KEY = 'menu';
const TABS_NAVIGATION_STATE = {
  index: 0,
  routes: [
    { key: MENU_TAB_KEY },
    { key: PLACES_TAB_KEY },
  ],
}

// TODO PLACES CONTAINER
const PlacesPlaceholder = () => <View style={[ styles.container, { backgroundColor: Colors.light } ]} />;

export class Main extends PureComponent {
  state = {
    expanded: false,
    mapHeight: new Animated.Value(collapsedMapHeight),
    tabViewPosition: new Animated.Value(0)
  }

  renderScene = SceneMap({
    [MENU_TAB_KEY]: Menu,
    [PLACES_TAB_KEY]: PlacesPlaceholder,
  });

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
    this.setState({ expanded: not(this.state.expanded) })
  }

  handlePositionChange = ({ value }) => this.state.tabViewPosition.setValue(value);

  render () {
    const rotateZ = this.state.mapHeight.interpolate({
      inputRange: ([collapsedMapHeight, expandedMapHeight]),
      outputRange: (['0deg', '180deg']),
    });

    const indicatorsTranslateY = this.state.mapHeight.interpolate({
      inputRange: ([collapsedMapHeight, expandedMapHeight]),
      outputRange: ([0, 12]),
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.map, { height: this.state.mapHeight }]}>
          <Map />

          <View style={styles.mapToggleWrapper}>
            <TouchableOpacity style={styles.mapToggleButton} onPress={this.toggleMapHeight}>
              <AnimatedIcon
                style={{ transform: [{ rotateZ }] }}
                name="expand-more"
                size={20}
                color={Colors.aqua}
              />
            </TouchableOpacity>

            <Animated.View style={{ transform: [{ translateY: indicatorsTranslateY }] }}>
              <SlidesNavigation
                itemsCount={TABS_NAVIGATION_STATE.routes.length}
                position={this.state.tabViewPosition}
              />
            </Animated.View>
          </View>
        </Animated.View>

        <TabViewAnimated
          style={styles.content}
          navigationState={TABS_NAVIGATION_STATE}
          renderScene={this.renderScene}
          onIndexChange={identity}
          onPositionChange={this.handlePositionChange}
        />
      </View>
    )
  }
}

export default connect(null, {})(Main)

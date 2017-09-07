import React, { PureComponent } from 'react'
import { ScrollView, View, Animated, TouchableOpacity, Easing } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { ifElse, propEq, always, identity } from 'ramda';

import styles from './Styles/Main'
import { Metrics, Colors } from '../Themes'
import Map from './Map';
import SlidesNavigation from '../Components/SlidesNavigation';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const collapsedMapHeight = 200;
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

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: Colors.light } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: Colors.light } ]} />;

export default class Main extends PureComponent {
  state = {
    expanded: false,
    mapHeight: new Animated.Value(collapsedMapHeight),
  }

  renderHeader = ({ navigationState: { routes }, position }) => (
    <SlidesNavigation
      itemsCount={routes.length}
      position={position}
    />
  );

  renderScene = SceneMap({
    [MENU_TAB_KEY]: FirstRoute,
    [PLACES_TAB_KEY]: SecondRoute,
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
        <TabViewAnimated
          style={styles.content}
          navigationState={TABS_NAVIGATION_STATE}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onIndexChange={identity}
        />
      </View>
    )
  }
}

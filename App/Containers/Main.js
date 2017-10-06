import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { View, Animated, TouchableOpacity, Easing } from 'react-native'
import { TabViewAnimated, SceneMap } from 'react-native-tab-view'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { ifElse, equals, always, identity, not } from 'ramda'

import styles from './Styles/Main'
import { Metrics, Colors } from '../Themes'
import Map from './Map'
import Places from './Places'
import SlidesNavigation from '../Components/SlidesNavigation'
import Menu from '../Components/Menu'
import MainActions from '../Redux/MainRedux'
import { selectTabIndex } from '../Selectors/MainSelectors'

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const collapsedMapHeight = 300;
const expandedMapHeight = Metrics.screenHeight;

const PLACES_TAB_KEY = 'places';
const MENU_TAB_KEY = 'menu';
const TABS = {
  routes: [
    { key: MENU_TAB_KEY },
    { key: PLACES_TAB_KEY },
  ],
}

export class Main extends PureComponent {
  state = {
    mapHeight: new Animated.Value(collapsedMapHeight),
    tabViewPosition: new Animated.Value(0)
  }

  expanded = false

  renderScene = SceneMap({
    [MENU_TAB_KEY]: Menu,
    [PLACES_TAB_KEY]: Places,
  });

  toggleMapHeight = () => {
    Animated.timing(
      this.state.mapHeight,
      {
        toValue: ifElse(
          equals(true),
          always(collapsedMapHeight),
          always(expandedMapHeight),
        )(this.expanded),
        easing: Easing.ease,
        duration: 500
      }
    ).start();
    this.expanded = not(this.expanded)
  }

  handlePositionChange = ({ value }) => this.state.tabViewPosition.setValue(value)

  render () {
    const rotateZ = this.state.mapHeight.interpolate({
      inputRange: ([collapsedMapHeight, expandedMapHeight]),
      outputRange: (['0deg', '180deg']),
    });

    const indicatorsTranslateY = this.state.mapHeight.interpolate({
      inputRange: ([collapsedMapHeight, expandedMapHeight]),
      outputRange: ([0, 12]),
    });

    const navigationState = {
      index: this.props.index,
      ...TABS
    }

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
                itemsCount={TABS.routes.length}
                position={this.state.tabViewPosition}
              />
            </Animated.View>
          </View>
        </Animated.View>

        <TabViewAnimated
          style={styles.content}
          navigationState={navigationState}
          renderScene={this.renderScene}
          onIndexChange={this.props.changeTabIndex}
          onPositionChange={this.handlePositionChange}
        />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  index: selectTabIndex
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeTabIndex: MainActions.changeTabIndex,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)

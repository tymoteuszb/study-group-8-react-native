import React, { PureComponent } from 'react'
import { ScrollView, View } from 'react-native'

import MenuItem from './MenuItem'
import { Colors } from '../Themes'
import styles from './Styles/Menu'
import { PLACES_TAB_KEY } from '../Containers/Main'

export default class Menu extends PureComponent {
  openPlacesTab = () => {
    const placesIndex = this.props.tabs.routes.findIndex((route) => route.key === PLACES_TAB_KEY);
    this.props.changeTabIndex(placesIndex);
  };

  render () {
    return (
      <ScrollView style={styles.list}>
        <View style={styles.container}>
          <MenuItem icon='lightbulb-outline' color={Colors.yellow} />
          <MenuItem
            icon='explore'
            disabled={!this.props.isCompassSupported}
            color={Colors.orange}
            onPress={() => this.props.navigate('Compass')}
          />
          <MenuItem icon='room' color={Colors.brown} onPress={this.openPlacesTab} />
          <MenuItem
            icon='photo-camera'
            color={Colors.aqua}
            onPress={() => this.props.navigate('Camera')}
          />
        </View>
      </ScrollView>
    )
  }
}

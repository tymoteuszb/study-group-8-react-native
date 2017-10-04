import React, { PureComponent } from 'react'
import { ScrollView, Text, View } from 'react-native'

import MenuItem from './MenuItem'
import { Colors } from '../Themes'
import styles from './Styles/Menu'

export default class Menu extends PureComponent {
  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MenuItem icon="lightbulb-outline" title="Flashlight" color={Colors.yellow} />
          <MenuItem icon="explore" title="Compass" color={Colors.orange} />
          <MenuItem icon="room" title="Places" color={Colors.brown} />
          <MenuItem icon="photo-camera" title="Camera" color={Colors.aqua} />
        </View>
      </ScrollView>
    )
  }
}

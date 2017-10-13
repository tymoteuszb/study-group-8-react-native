import React, { PureComponent } from 'react'
import { ScrollView, View } from 'react-native'

import MenuItem from './MenuItem'
import { Colors } from '../Themes'
import styles from './Styles/Menu'

export default class Menu extends PureComponent {
  render () {
    return (
      <ScrollView style={styles.list}>
        <View style={styles.container}>
          <MenuItem icon='lightbulb-outline' color={Colors.yellow} />
          <MenuItem icon='explore' color={Colors.orange} />
          <MenuItem icon='room' color={Colors.brown} />
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

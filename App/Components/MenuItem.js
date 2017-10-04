import React, { PureComponent } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../Themes'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import styles from './Styles/MenuItem'

export default class MenuItem extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity  style={[styles.iconWrapper, { backgroundColor: this.props.color }]}>
          <Icon
            style={styles.icon}
            name={this.props.icon}
            size={50}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

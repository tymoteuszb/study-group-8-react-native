import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { Colors } from '../Themes'

import styles from './Styles/RoundedButton'

export default class MenuItem extends PureComponent {
  render () {
    return (
      <TouchableOpacity style={[styles.container, this.props.styles]} onPress={this.props.onPress}>
        <Icon
          name={this.props.icon}
          size={20}
          color={Colors.aqua}
        />
      </TouchableOpacity>
    )
  }
}

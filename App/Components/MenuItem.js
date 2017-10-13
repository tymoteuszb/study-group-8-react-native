import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { identity } from 'ramda'
import { Colors } from '../Themes'

import styles from './Styles/MenuItem'

export default class MenuItem extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }

  static defaultProps = {
    onPress: identity
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.iconWrapper, { backgroundColor: this.props.color }]}
          onPress={this.props.onPress}>
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

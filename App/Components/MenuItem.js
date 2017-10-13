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
    disabled: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    onPress: identity,
    disabled: false
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.iconWrapper, { backgroundColor: this.props.color, opacity: this.props.disabled ? 0.2 : 1 }]}
          onPress={!this.props.disabled ? this.props.onPress : identity}>
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

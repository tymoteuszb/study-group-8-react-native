import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { Colors } from '../Themes'

import styles from './Styles/RoundedButton'

export default class MenuItem extends PureComponent {
  static propTypes = {
    size: PropTypes.number.isRequired,
    iconSize: PropTypes.number.isRequired,
    styles: PropTypes.any,
    onPress: PropTypes.func,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }

  static defaultProps = {
    size: 30,
    iconSize: 20,
    color: Colors.aqua
  }

  get sizeStyles() {
    const { size } = this.props

    return {
      width: size,
      height: size,
      borderRadius: size / 2
    }
  }

  render () {
    return (
      <TouchableOpacity style={[styles.container, this.sizeStyles, this.props.styles]} onPress={this.props.onPress}>
        <Icon
          name={this.props.icon}
          size={this.props.iconSize}
          color={this.props.color}
        />
      </TouchableOpacity>
    )
  }
}

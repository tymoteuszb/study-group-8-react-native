import React, { PureComponent } from 'react'
import { View, Image, Text, Animated, Easing, DeviceEventEmitter } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import RoundedButton from '../Components/RoundedButton';
import { Colors } from '../Themes'

import { selectDirection } from '../Selectors/CompassSelectors'

import styles from './Styles/Compass'
import Images from '../Themes/Images'


class Compass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rotation: new Animated.Value(props.direction),
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.direction !== newProps.direction) {
      Animated.timing(
        this.state.rotation,
        {
          toValue: newProps.direction,
          easing: Easing.ease,
          duration: 10
        }
      ).start();
    }
  }

  render () {
    const spin = this.state.rotation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '-360deg']
    });

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Direction: {this.props.direction}</Text>
        <Icon
          name="arrow-drop-down"
          size={100}
          color={Colors.aqua}
        />
        <Animated.Image
          style={[styles.compassImage, { transform: [{rotate: spin}] }]}
          source={Images.compass}
        />
        <RoundedButton
          icon='arrow-back'
          color={Colors.white}
          styles={styles.backButton}
          size={50}
          iconSize={25}
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  direction: selectDirection,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Compass)

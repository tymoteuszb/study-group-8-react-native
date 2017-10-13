import React, { PureComponent } from 'react'
import { View, Image, Animated, Easing, DeviceEventEmitter } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import RoundedButton from '../Components/RoundedButton';
import { Colors } from '../Themes'

import styles from './Styles/Compass'
import Images from '../Themes/Images'


class Compass extends PureComponent {
  state = {
    rotation: new Animated.Value(0),
  };

  componentDidMount() {
    DeviceEventEmitter.addListener('headingUpdated', data => {
      Animated.timing(
        this.state.rotation,
        {
          toValue: data,
          easing: Easing.ease,
          duration: 10
        }
      ).start();
    });
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('headingUpdated');
  }

  render () {
    const spin = this.state.rotation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.compassImage}
            source={Images.compass}
          />
          <Animated.Image
            style={[styles.arrowImage, { transform: [{rotate: spin}] }]}
            source={Images.compassArrow}
          />
        </View>
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
})

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Compass)

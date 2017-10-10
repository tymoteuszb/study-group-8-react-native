import { StackNavigator } from 'react-navigation'
import { Easing, Animated } from 'react-native'
import Main from '../Containers/Main'
import Camera from '../Containers/Camera'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Main: {
    screen: Main,
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      headerTitle: 'CAMERA'
    }
  }
}, {
  initialRouteName: 'Main',
  mode: 'card',
  headerMode: 'none',
  navigationOptions: {},
  transitionConfig: () => ({
    transitionSpec: {
      duration: 500,
      easing: Easing.ease,
      timing: Animated.timing
    },
    screenInterpolator: ({ position, scene: { index } }) => {
      const scale = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [1.2, 1, 1.2]
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 0]
      })

      return { opacity, transform: [{ scale }] }
    }
  })
})

export default PrimaryNav

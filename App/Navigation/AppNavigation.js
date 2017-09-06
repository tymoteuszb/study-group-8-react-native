import { StackNavigator } from 'react-navigation'
import Main from '../Containers/Main'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Main: { screen: Main }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Main',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav

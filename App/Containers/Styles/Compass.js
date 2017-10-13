import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    backgroundColor: Colors.aqua,
    position: 'absolute',
    right: 20,
    bottom: 20,
    zIndex: 1
  },
  compassImage: {
    width: 380,
    height: 380,
  },
  arrowImage: {
    width: 380,
    height: 380,
    position: 'absolute',
    left: 0,
    right: 0,
  }
})

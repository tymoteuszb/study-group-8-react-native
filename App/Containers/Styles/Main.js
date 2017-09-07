import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: ApplicationStyles.screen.mainContainer,
  map: {
    backgroundColor: Colors.transparent,
  },
  mapToggleWrapper: {
    position: 'absolute',
    bottom: 20,
    width: Metrics.screenWidth,
    left: 0,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1
  }
})

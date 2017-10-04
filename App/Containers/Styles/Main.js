import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: ApplicationStyles.screen.mainContainer,
  map: {
    backgroundColor: Colors.transparent,
  },
  mapToggleWrapper: {
    position: 'absolute',
    bottom: 0,
    width: Metrics.screenWidth,
    left: 0,
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  mapToggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: Colors.light,
    width: 30,
    height: 30,
  },
  content: {
    flex: 1
  }
})

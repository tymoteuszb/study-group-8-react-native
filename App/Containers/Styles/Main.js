import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: ApplicationStyles.screen.mainContainer,
  map: {
    backgroundColor: Colors.transparent,
    height: Metrics.screenHeight
  },
  mapToggleWrapper: {
    position: 'absolute',
    bottom: Metrics.screenHeight / 2 + 20,
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
  contentWrapper: {
    position: 'absolute',
    bottom: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 2
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
})

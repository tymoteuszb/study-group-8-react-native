import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: ApplicationStyles.screen.mainContainer,
  camera: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  content: {
    width: Metrics.screenWidth,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    zIndex: 2
  },
  trigger: {
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.light
  }
})

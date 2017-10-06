import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: ApplicationStyles.screen.mainContainer,
  map: {
    flex: 1,
  },
  loaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex: 2
  },
  iconWrapper: {
    width: 70,
    height: 70,
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light,
    zIndex: 1
  }
})

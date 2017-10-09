import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/index';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: (Metrics.screenWidth - 20) / 3,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

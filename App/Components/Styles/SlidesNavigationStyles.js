import { StyleSheet } from 'react-native'

import { Metrics, Colors } from '../../Themes/index';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
    zIndex: 1,
    width: Metrics.screenWidth,
    flex: 0,
    height: 6,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

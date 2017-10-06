import { StyleSheet } from 'react-native'

import { Colors } from '../../Themes/index';

export default StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: Colors.light,
    height: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});

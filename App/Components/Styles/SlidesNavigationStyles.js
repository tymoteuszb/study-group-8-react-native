import { StyleSheet } from 'react-native'

import { Colors } from '../../Themes/index';

export default StyleSheet.create({
  container: {
    zIndex: 1,
    flex: 0,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginTop: 10,
  },
});

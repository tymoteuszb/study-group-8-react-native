import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/index';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.light
  },
  selected: {
    backgroundColor: Colors.grey
  },
  imageContainer: {
    flex: 0,
    borderRadius: 50,
    height: 50,
    width: 50
  },
  image: {
    flex: 1,
    borderRadius: 50,
    height: 50,
    width: 50
  },
  title: {
    fontSize: 12,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20
  }
})

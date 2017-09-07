import {Dimensions, Platform} from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android';

const screenHeight = ExtraDimensions.get('REAL_WINDOW_HEIGHT') - ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT') - ExtraDimensions.get('STATUS_BAR_HEIGHT');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: ExtraDimensions.get('REAL_WINDOW_WIDTH'),
  screenHeight,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
}

export default metrics

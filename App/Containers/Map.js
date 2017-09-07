import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'

import { MapStyles } from '../Themes'
import styles from './Styles/Map'

class Map extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={MapStyles}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    )
  }
}

export default connect(null, {})(Map)

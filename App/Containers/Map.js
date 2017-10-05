import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MapView from 'react-native-maps'
import { createStructuredSelector } from 'reselect'

import { MapStyles } from '../Themes'
import { selectRegion } from '../Selectors/MapSelectors'
import MapActions from '../Redux/MapRedux'
import PlacesActions from '../Redux/PlacesRedux'

import styles from './Styles/Map'

class Map extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={MapStyles}
          region={this.props.region}
          onRegionChange={this.props.changeRegion}
          onRegionChangeComplete={this.props.refreshPlaces}
          showsUserLocation
          showsMyLocationButton
          showsCompass
          zoomEnabled
        />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  region: selectRegion
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  refreshPlaces: PlacesActions.request,
  changeRegion: MapActions.changeRegion
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Map)

import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MapView from 'react-native-maps'
import { createStructuredSelector } from 'reselect'
import RoundedButton from '../Components/RoundedButton'

import { MapStyles } from '../Themes'
import { selectRegion } from '../Selectors/MapSelectors'
import { selectPlacesMarkers } from '../Selectors/PlacesSelectors'
import { selectPositionCoordinates } from '../Selectors/GeolocationSelectors'
import MapActions from '../Redux/MapRedux'
import PlacesActions from '../Redux/PlacesRedux'

import styles from './Styles/Map'

class Map extends PureComponent {
  goToCurrentLocation = () => {
    if(this.props.currentPosition) {
      this.map.animateToCoordinate(this.props.currentPosition)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topButtonsWrapper}>
          <RoundedButton icon='my-location' onPress={this.goToCurrentLocation} />
        </View>
        <MapView
          ref={ref => { this.map = ref }}
          style={styles.map}
          customMapStyle={MapStyles}
          region={this.props.region}
          onRegionChangeComplete={this.props.changeRegion}
          showsUserLocation
          showsMyLocationButton
          showsCompass
          zoomEnabled
        >
          {this.props.markers.map(({ coordinates, title, id, color }) => (
            <MapView.Marker
              key={id}
              coordinate={coordinates}
              title={title}
              pinColor={color}
            />
          ))}
        </MapView>
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  region: selectRegion,
  markers: selectPlacesMarkers,
  currentPosition: selectPositionCoordinates
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  refreshPlaces: PlacesActions.request,
  changeRegion: MapActions.changeRegion
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Map)

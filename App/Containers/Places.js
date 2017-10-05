import React, { PureComponent } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { complement, equals } from 'ramda';

import { selectPlacesData } from '../Selectors/PlacesSelectors'
import PlacesActions from '../Redux/PlacesRedux'
import PlaceItem from '../Components/PlaceItem'

import styles from './Styles/Map'

class Map extends PureComponent {
  dataSource = new ListView.DataSource({ rowHasChanged: complement(equals) });

  renderRow = ({ name, id, photos, icon }) => <PlaceItem key={id} name={name} photos={photos} icon={icon} />

  render () {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource.cloneWithRows(this.props.places)}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  places: selectPlacesData
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPlaces: PlacesActions.request
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Map)

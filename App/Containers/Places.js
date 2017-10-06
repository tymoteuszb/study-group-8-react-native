import React, { PureComponent } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { complement, equals, ifElse, propEq, always } from 'ramda'
import { Pulse } from 'react-native-loader'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

import { selectPlacesData, selectIsFetching, arePlacesEmpty } from '../Selectors/PlacesSelectors'
import PlacesActions from '../Redux/PlacesRedux'
import PlaceItem from '../Components/PlaceItem'
import { Colors } from '../Themes'

import styles from './Styles/Map'

class Map extends PureComponent {
  dataSource = new ListView.DataSource({ rowHasChanged: complement(equals) });

  renderRow = ({ name, id, photos, icon }) => <PlaceItem key={id} name={name} photos={photos} icon={icon} />

  get loader() {
    return ifElse(
      propEq('isFetching', true),
      () => (
        <View style={styles.loaderWrapper}>
          <Pulse size={30} color={Colors.aqua} />
        </View>
      ),
      always(null)
    )(this.props)
  }

  get emptyState() {
    return ifElse(
      propEq('isEmpty', true),
      () => (
        <View style={styles.emptyWrapper}>
          <View style={styles.iconWrapper}>
            <Icon
              style={styles.icon}
              name="map"
              size={50}
              color={Colors.grey}
            />
          </View>
          <Text>I can't find any place in this region...</Text>
        </View>
      ),
      always(null)
    )(this.props)
  }

  render () {
    return (
      <View style={styles.container}>
        {this.loader}
        {this.emptyState}
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
  places: selectPlacesData,
  isFetching: selectIsFetching,
  isEmpty: arePlacesEmpty
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPlaces: PlacesActions.request
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Map)

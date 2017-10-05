import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { pipe, prop, ifElse, either, isNil, isEmpty, always } from 'ramda'

import styles from './Styles/PlaceItem'
import GooglePhoto from './GooglePhoto';
import Config from 'react-native-config'
import qs from 'query-string'
const GOOGLE_PHOTO_URL = 'https://maps.googleapis.com/maps/api/place/photo'

const IMAGE_SIZE = 100

export default class PlaceItem extends PureComponent {
  get source () {
    const photoreference = pipe(
      prop('photos'),
      ifElse(
        either(isNil, isEmpty),
        always(null),
        photos => photos.getIn([0, 'photo_reference'])
      )
    )(this.props)

    const params = {
      photoreference,
      maxwidth: IMAGE_SIZE,
      maxheight: IMAGE_SIZE,
      key: Config.GOOGLE_PLACES_API_KEY
    }
    const query = qs.stringify(params)

    return { uri: `${GOOGLE_PHOTO_URL}?${query}` }
  }

  render () {
    return (
      <View style={styles.container}>
        <GooglePhoto
          source={this.source}
          style={styles.image}
          containerStyle={styles.imageContainer}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </View>
    )
  }
}


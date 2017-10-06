import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { pipe, prop, ifElse, either, isNil, isEmpty, always, propEq } from 'ramda'

import styles from './Styles/PlaceItem'
import GooglePhoto from './LazyImage';
import Config from 'react-native-config'
import qs from 'query-string'

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

    return { uri: `${Config.GOOGLE_PHOTO_URL}?${query}` }
  }

  get selectedStyles () {
    return ifElse(
      propEq('isSelected', true),
      always(styles.selected),
      always(null)
    )(this.props)
  }

  render () {
    return (
      <TouchableOpacity style={[styles.container, this.selectedStyles]} onPress={this.props.onPress}>
        <GooglePhoto
          source={this.source}
          style={styles.image}
          containerStyle={styles.imageContainer}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


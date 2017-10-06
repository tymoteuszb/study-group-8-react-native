import { createSelector } from 'reselect'
import { prop, isEmpty } from 'ramda'
import { Colors } from '../Themes'

const selectPlaces = prop('places')

export const selectPlacesData = createSelector(
  selectPlaces,
  prop('data')
)

export const selectIsFetching = createSelector(
  selectPlaces,
  prop('isFetching')
)

export const selectPlacesMarkers = createSelector(
  selectPlacesData,
  data => data.map(({ id, name: title, geometry: { location: { lat, lng } } }) => ({
    id,
    coordinates: { latitude: lat, longitude: lng },
    title,
    color: Colors.aqua
  }))
)

export const arePlacesEmpty = createSelector(
  selectPlacesData,
  isEmpty
)
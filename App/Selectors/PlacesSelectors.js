import { createSelector } from 'reselect'
import { prop, isEmpty, equals, always, ifElse } from 'ramda'
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

export const selectSelectedPlace = createSelector(
  selectPlaces,
  prop('selectedPlace')
)

export const selectPlacesMarkers = createSelector(
  selectPlacesData, selectSelectedPlace,
  (data, selectedPlace) => data.map(({ id, name: title, geometry: { location: { lat, lng } } }) => ({
    id,
    coordinates: { latitude: lat, longitude: lng },
    title,
    color: ifElse(
      equals(selectedPlace),
      always(Colors.orange),
      always(Colors.yellow)
    )(id)
  }))
)

export const arePlacesEmpty = createSelector(
  selectPlacesData,
  isEmpty
)
import { createSelector } from 'reselect'
import { prop, pick } from 'ramda'

const selectGeolocation = prop('geolocation')

export const selectPosition = createSelector(
  selectGeolocation,
  prop('position')
)

export const selectPositionCoordinates = createSelector(
  selectPosition,
  pick(['latitude', 'longitude'])
)
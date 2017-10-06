import { createSelector } from 'reselect'
import { prop } from 'ramda'

const selectGeolocation = prop('geolocation')

export const selectPosition = createSelector(
  selectGeolocation,
  prop('position')
)

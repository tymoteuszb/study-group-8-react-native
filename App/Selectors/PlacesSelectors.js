import { createSelector } from 'reselect'
import { prop } from 'ramda'

const selectPlaces = prop('places')

export const selectPlacesData = createSelector(
  selectPlaces,
  prop('data')
)

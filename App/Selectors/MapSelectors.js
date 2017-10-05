import { createSelector } from 'reselect'
import { prop } from 'ramda'

const selectMap = prop('map')

export const selectRegion = createSelector(
  selectMap,
  state => state.getIn('region')
)

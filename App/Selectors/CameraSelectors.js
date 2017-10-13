import { createSelector } from 'reselect'
import { prop } from 'ramda'

const selectCamera = prop('camera')

export const selectPath = createSelector(
  selectCamera,
  prop('path')
)

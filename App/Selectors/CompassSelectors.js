import { createSelector } from 'reselect'
import { prop } from 'ramda'

const selectMain = prop('compass')

export const selectDirection = createSelector(
  selectMain,
  prop('direction')
)


export const selectIsSupported = createSelector(
  selectMain,
  prop('isSupported')
)

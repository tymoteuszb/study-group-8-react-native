import { createSelector } from 'reselect'
import { prop } from 'ramda'

const selectMain = prop('main')

export const selectTabIndex = createSelector(
  selectMain,
  prop('tabIndex')
)

export const selectHeadingSupport = createSelector(
  selectMain,
  prop('isHeadingSupported')
)


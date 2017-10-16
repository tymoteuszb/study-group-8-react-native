import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  initialize: [],
  startWatchingDirection: [],
  setIsSupported: [],
  changeDirection: ['direction'],
}, { prefix: 'COMPASS_' })

export const CompassTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  direction: 0,
  isSupported: false,
})

export const changeDirection = (state, { direction }) => state
  .set('direction', direction)

export const setIsSupported = (state) => state
  .set('isSupported', true)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_DIRECTION]: changeDirection,
  [Types.SET_IS_SUPPORTED]: setIsSupported,
})

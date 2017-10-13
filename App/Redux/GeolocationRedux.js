import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  startWatchingPosition: [],
  getCurrentPosition: ['position'],
  changePosition: ['position']
}, { prefix: 'GEOLOCATION_' })

export const GeolocationTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  position: {}
})

export const changePosition = (state, { position }) => state
  .set('position', position)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_POSITION]: changePosition
})

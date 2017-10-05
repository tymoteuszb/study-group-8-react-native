import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeRegion: ['region']
})

export const MapTypes = Types
export default Creators

const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export const INITIAL_STATE = Immutable({
  region: INITIAL_REGION,
  isRequestingPosition: false
})

export const changeRegion = (state, { region }) => state
  .set('region', region)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_REGION]: changeRegion
})

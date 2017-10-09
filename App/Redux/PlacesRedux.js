import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { propEq, ifElse } from 'ramda'

const { Types, Creators } = createActions({
  request: ['params'],
  success: ['data'],
  failure: ['error'],
  togglePlace: ['id']
}, { prefix: 'PLACES_' })

export const PlacesTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isFetching: false,
  error: null,
  selectedPlace: null,
  data: []
})

export const request = state => state
  .set('error', null)
  .set('isFetching', true)

export const success = (state, { data }) => state
  .set('data', data)
  .set('isFetching', false)

export const failure = (state, { error }) => state
  .set('error', error)
  .set('isFetching', false)

export const togglePlace = (state, { id }) => ifElse(
  propEq('selectedPlace', id),
  () => state.set('selectedPlace', null),
  () => state.set('selectedPlace', id)
)(state)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST]: request,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
  [Types.TOGGLE_PLACE]: togglePlace
})

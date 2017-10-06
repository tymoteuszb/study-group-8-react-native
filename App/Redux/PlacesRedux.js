import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  request: ['params'],
  success: ['data'],
  failure: ['error']
}, { prefix: 'PLACES_' });

export const PlacesTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isFetching: false,
  error: null,
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST]: request,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure
})

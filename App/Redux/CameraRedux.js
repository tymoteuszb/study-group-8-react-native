import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  changePath: ['path'],
  clear: [],
  imageSearchRequest: [],
  imageSearchSuccess: ['data'],
  imageSearchFailure: ['error']
}, { prefix: 'CAMERA_' })

export const CameraTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  path: null,
  isFetching: false,
  data: [],
  error: null
})

export const changePath = (state, { path }) => state
  .set('path', path)

export const clear = () => INITIAL_STATE

export const imageSearchRequest = state => state
  .set('isFetching', true)
  .set('error', null)
  .set('data', INITIAL_STATE.data)

export const imageSearchSuccess = (state, { data }) => state
  .set('isFetching', false)
  .set('data', data)

export const imageSearchFailure = (state, { error }) => state
  .set('isFetching', false)
  .set('error', error)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_PATH]: changePath,
  [Types.CLEAR]: clear,
  [Types.IMAGE_SEARCH_REQUEST]: imageSearchRequest,
  [Types.IMAGE_SEARCH_SUCCESS]: imageSearchSuccess,
  [Types.IMAGE_SEARCH_FAILURE]: imageSearchFailure
})

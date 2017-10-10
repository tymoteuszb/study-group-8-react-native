import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  changePath: ['path'],
  clear: []
})

export const CameraTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  path: null
})

export const changePath = (state, { path }) => state
  .set('path', path)

export const clear = () => INITIAL_STATE

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_PATH]: changePath,
  [Types.CLEAR]: clear
})

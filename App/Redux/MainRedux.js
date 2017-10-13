import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  changeTabIndex: ['index'],
  setHeadingSupport: null,
}, { prefix: 'MAIN_' })

export const MainTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  tabIndex: 0,
  isHeadingSupported: false,
})

export const changeTabIndex = (state, { index }) => state
  .set('tabIndex', index)

export const setHeadingSupport = (state) => state
  .set('isHeadingSupported', true)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_TAB_INDEX]: changeTabIndex,
  [Types.SET_HEADING_SUPPORT]: setHeadingSupport
})

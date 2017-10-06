import { put } from 'redux-saga/effects'
import PlacesActions from '../Redux/PlacesRedux'

export function * changeRegion () {
  try {
    yield put(PlacesActions.request())
  } catch (error) {
    console.log(error);
  }
}

import { put } from 'redux-saga/effects'
import GeolocationActions from '../Redux/GeolocationRedux'

export function * startup () {
  try {
    yield put(GeolocationActions.watchPosition())
    yield put(GeolocationActions.getCurrentPosition())
  } catch (error) {
    console.log(error);
  }
}

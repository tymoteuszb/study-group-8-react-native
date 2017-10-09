import { put } from 'redux-saga/effects'
import GeolocationActions from '../Redux/GeolocationRedux'

export function * startup () {
  try {
    yield put(GeolocationActions.getCurrentPosition())
    yield put(GeolocationActions.startWatchingPosition())
  } catch (error) {
    console.log(error);
  }
}

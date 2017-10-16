import { put } from 'redux-saga/effects'
import GeolocationActions from '../Redux/GeolocationRedux'
import CompassActions from '../Redux/CompassRedux'

export function * startup () {
  try {
    yield put(GeolocationActions.getCurrentPosition())
    yield put(GeolocationActions.startWatchingPosition())
    yield put(CompassActions.initialize())
  } catch (error) {
    console.log(error);
  }
}

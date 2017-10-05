import { put, take } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import GeolocationActions from '../Redux/GeolocationRedux'
import { identity } from 'ramda'

export function * watchPosition () {
  try {
    const channel = yield eventChannel(emitter => {
      navigator.geolocation.watchPosition(success => emitter(success))
      return () => navigator.geolocation.stopObserving()
    })

    while (true) { //eslint-disable-line
      const { coords } = yield take(channel)

      if (coords) {
        yield put(GeolocationActions.changePosition(coords))
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export function * getCurrentPosition () {
  try {
    const channel = yield eventChannel(emitter => {
      navigator.geolocation.getCurrentPosition(success => emitter(success))
      return identity
    })

    const { coords } = yield take(channel)

    if (coords) {
      yield put(GeolocationActions.changePosition(coords))
    }
  } catch (error) {
    console.log(error)
  }
}

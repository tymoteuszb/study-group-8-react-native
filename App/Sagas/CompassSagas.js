import { put, take, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import ReactNativeHeading from 'react-native-heading'
import { DeviceEventEmitter } from 'react-native'

import CompassActions from '../Redux/CompassRedux'


export function * initialize () {
  try {
    const isHeadingSupported = yield ReactNativeHeading.start(1);
    if (isHeadingSupported) {
      yield put(CompassActions.setIsSupported());
      yield put(CompassActions.startWatchingDirection());
    }
  } catch (error) {
    console.log(error)
  }
}

export function * startWatchingDirection () {
  try {
    const channel = yield eventChannel(emitter => {
      DeviceEventEmitter.addListener('headingUpdated', (data) => emitter(data));
      return () => DeviceEventEmitter.removeAllListeners('headingUpdated');
    });

    while (true) { //eslint-disable-line
      const direction = yield take(channel)

      yield put(CompassActions.changeDirection(direction))
    }
  } catch (error) {
    console.log(error)
  }
}

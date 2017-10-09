import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { PlacesTypes } from '../Redux/PlacesRedux'
import { MapTypes } from '../Redux/MapRedux'
import { GeolocationTypes } from '../Redux/GeolocationRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { request as placesRequest } from './PlacesSagas'
import { changeRegion } from './MapSagas'
import { startWatchingPosition, getCurrentPosition } from './GeolocationSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PlacesTypes.REQUEST, placesRequest),
    takeLatest(MapTypes.CHANGE_REGION, changeRegion),
    takeLatest(GeolocationTypes.GET_CURRENT_POSITION, getCurrentPosition),
    takeLatest(GeolocationTypes.START_WATCHING_POSITION, startWatchingPosition),
  ])
}

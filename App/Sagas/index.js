import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { PlacesTypes } from '../Redux/PlacesRedux'
import { MapTypes } from '../Redux/MapRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { request as placesRequest } from './PlacesSagas'
import { changeRegion } from './MapSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PlacesTypes.REQUEST, placesRequest),
    takeLatest(MapTypes.CHANGE_REGION, changeRegion)
  ])
}

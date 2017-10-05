import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { PlacesTypes } from '../Redux/PlacesRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { request as placesRequest } from './PlacesSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PlacesTypes.REQUEST, placesRequest)
  ])
}

import Config from 'react-native-config'
import qs from 'query-string'
import { put, select } from 'redux-saga/effects'

import { selectRegion } from '../Selectors/MapSelectors'
import PlacesActions from '../Redux/PlacesRedux'

export function * request () {
  try {
    const { latitude, longitude } = yield select(selectRegion)

    const query = qs.stringify({
      key: Config.GOOGLE_PLACES_API_KEY,
      radius: 2000,
      location: `${latitude},${longitude}`
    })

    try {
      const response = yield fetch(`${Config.GOOGLE_PLACES_URL}?${query}`, { method: 'GET' })
      const { results } = yield response.json()

      yield put(PlacesActions.success(results))
    } catch (error) {
      yield put(PlacesActions.failure(error))
    }
  } catch (error) {
    console.log(error);
  }
}

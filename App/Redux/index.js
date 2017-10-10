import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as main } from './MainRedux'
import { reducer as map } from './MapRedux'
import { reducer as places } from './PlacesRedux'
import { reducer as geolocation } from './GeolocationRedux'
import { reducer as camera } from './CameraRedux'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    main,
    map,
    places,
    geolocation,
    camera
  })

  return configureStore(rootReducer, rootSaga)
}

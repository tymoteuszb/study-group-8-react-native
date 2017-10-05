import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as map } from './MapRedux';
import { reducer as geolocation } from './GeolocationRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    map,
    geolocation
  })

  return configureStore(rootReducer, rootSaga)
}

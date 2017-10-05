import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as map } from './MapRedux';
import { reducer as places } from './PlacesRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    map,
    places
  })

  return configureStore(rootReducer, rootSaga)
}

import { put, take, select } from 'redux-saga/effects'
import RNFS from 'react-native-fs'
import CameraActions from '../Redux/CameraRedux'
import { selectPath } from '../Selectors/CameraSelectors'

export function * imageSearchRequest () {
  try {
    const path = yield select(selectPath)
    const data = yield RNFS.readFile(path, 'base64')
    
  } catch (error) {
    console.log(error)
  }
}

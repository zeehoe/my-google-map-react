import { all } from 'redux-saga/effects'
import historyPlacesSaga from './historyPlacesSaga'

export default function* rootSaga() {
  yield all([
    historyPlacesSaga(),
  ])
}
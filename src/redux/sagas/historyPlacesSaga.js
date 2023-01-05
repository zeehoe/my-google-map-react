import { put, takeEvery } from 'redux-saga/effects'
import { SAVE_HISTORY_PLACES,SAVE_HISTORY_PLACES_ASYNC } from '../types';


// function getApi(apiUrl) {
//   return fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//       }
//   }).then(response => response.json())
//     .catch((error) => {throw error})
// }

function* saveHistoryPlace(action) {
   try {
      const payload = action.payload
      yield put({type: SAVE_HISTORY_PLACES,payload});
   } catch (e) {
      // if any
      // yield put({type: 'SAVE_HISTORY_PLACES_FAILED', message: e.message});
   }
}

function* historyPlacesSaga() {
   yield takeEvery(SAVE_HISTORY_PLACES_ASYNC, saveHistoryPlace);
}

export default historyPlacesSaga;
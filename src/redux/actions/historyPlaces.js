import * as type from '../types';

export function saveHistoryPlaces(places) {
  return { 
    type: type.SAVE_HISTORY_PLACES_ASYNC,
    payload: places,
  }
}

export function removeHistoryPlaces(index) {
  return { 
    type: type.REMOVE_HISTORY_PLACES,
    payload: index,
  }
}
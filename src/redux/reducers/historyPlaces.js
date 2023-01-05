import * as type from '../types';

const initialState = {
  historyPlaces: [],
}

export default function historyPlaces(state = initialState, action) {
  switch (action.type) {
      case type.SAVE_HISTORY_PLACES:
        return {
          ...state,
          historyPlaces: [...state.historyPlaces, action.payload]
        }
      case type.REMOVE_HISTORY_PLACES:
        const newList = [...state.historyPlaces].filter((place,index)=>index != action.payload)
        return {
          ...state,
          historyPlaces: newList
        }

    default:
      return state
  }
}
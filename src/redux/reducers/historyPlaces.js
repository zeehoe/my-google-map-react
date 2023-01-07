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
        // const newList = Object.assign([],[...state.historyPlaces].filter((place,index)=>index != action.payload))
        // const isSame = newList === state.historyPlaces
        // console.log("new place list " , newList)
        return {
          ...state,
          historyPlaces: state.historyPlaces.filter((place,index)=>index != action.payload),
        }

    default:
      return state
  }
}
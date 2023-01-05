import { combineReducers } from 'redux';
import historyPlaces from './historyPlaces';

const rootReducer = combineReducers({
  historyPlaces: historyPlaces,
});

export default rootReducer;
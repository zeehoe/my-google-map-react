import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

// TO TEST WITH DEV TOOL
// const store = compose(
//   applyMiddleware(sagaMiddleware),
//   window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(rootReducer);

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store;
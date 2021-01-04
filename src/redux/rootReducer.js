import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {appReducer, sagaWatcher} from "./appReducer";
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers({
  app: appReducer
})

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, compose(
  applyMiddleware(saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

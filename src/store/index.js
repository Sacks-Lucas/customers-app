import {createStore,applyMiddleware,compose} from 'redux'
import reducers from '../reducers'
import promiseMiddleware from 'redux-promise'

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store=createStore(reducers,{},composeEnhacers(applyMiddleware(promiseMiddleware)))
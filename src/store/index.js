import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
// import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENDION_COMPOSE || compose

const middleware = [thunk] //, logger

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)

export default store

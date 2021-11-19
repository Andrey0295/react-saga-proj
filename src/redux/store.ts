import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/root-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    )
    
)

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));
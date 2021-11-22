import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/posts.reducers';

import rootSaga from './sagas/root-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
})

// then run the saga
sagaMiddleware.run(rootSaga)




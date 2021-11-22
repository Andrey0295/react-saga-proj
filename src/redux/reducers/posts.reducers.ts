import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/posts.actions';

const {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  deletePostsRequest,
  deletePostsSuccess,
  deletePostsError
} = actions

  const data = createReducer([], {
    [getPostsSuccess.type]: (_, {payload}) => payload.map((post:any)=> ({...post, isLoading: false})), 
    [deletePostsSuccess.type]: (state, {payload}) => state.filter((post:any) => post.id !== payload) 
  })

  const isLoading = createReducer(false, {
    [getPostsRequest.type]: () => true,
    [getPostsSuccess.type]: () => false,
    [getPostsError.type]: () => false,
    [deletePostsRequest.type]: () => true,
    [deletePostsSuccess.type]: () => false,
    [deletePostsError.type]: () => false,
  })


export default combineReducers({
  data,
  isLoading,
});
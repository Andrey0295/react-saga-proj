import { createAction } from '@reduxjs/toolkit';



const getPostsRequest = createAction('posts/getPostsRequest');
const getPostsSuccess = createAction('posts/getPostsSuccess',(data: [...data:any])=> ({
  payload: data,
  
}));

const getPostsError = createAction('posts/getPostsError', (error: string)=>({
  payload: error
}));

const deletePostsRequest = createAction('posts/deletePostsRequest', (id: number | string)=>({
  payload: id,
}));

const deletePostsSuccess = createAction('posts/deletePostsSuccess', (id: number | string)=>({
  payload: id,
}));

const deletePostsError = createAction('posts/deletePostsError', (error: string)=>({
  payload: error
}));



export default {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  deletePostsRequest,
  deletePostsSuccess,
  deletePostsError,

};




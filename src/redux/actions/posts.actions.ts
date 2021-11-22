import { postsConstants } from '../constants/posts.constants';
import { PostsActionsTypes } from '../types/posts.types';

// GET ALL POSTS ACTIONS //////
  export function getPostsRequest(): PostsActionsTypes {
    return { type: postsConstants.GET_POSTS_REQUEST };
  }
  export function getPostsSuccess(data: Array<object>):PostsActionsTypes {
    return { type: postsConstants.GET_POSTS_SUCCESS, payload:data };
  }
  export function getPostsFailure(error: string): PostsActionsTypes {
    return { type: postsConstants.GET_POSTS_FAILURE, payload: error };
  }  




// DELETE POSTS ACTIONS //////


export function deletePostsRequest(id: number | string): PostsActionsTypes {
  return { type: postsConstants.DELETE_POSTS_REQUEST, payload: id };
}
export function deletePostsSuccess(id: number | string):PostsActionsTypes {
  return { type: postsConstants.DELETE_POSTS_SUCCESS, payload: id };
}
export function deletePostsFailure(error: string): PostsActionsTypes {
  return { type: postsConstants.DELETE_POSTS_FAILURE, payload: error };
}  







  // export default {
  //   getPostsRequest,
  //   getPostsSuccess,
  //   getPostsFailure,
  //   deletePostsRequest,
  //   deletePostsSuccess,
  //   deletePostsFailure

  // }
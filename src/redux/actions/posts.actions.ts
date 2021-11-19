import {postsConstants} from '../constants/posts.constants';

// GET ALL POSTS ACTIONS //////
  function getPostsRequest() {
    return { type: postsConstants.GET_POSTS_REQUEST };
  }
  function getPostsSuccess(data: any) {
    return { type: postsConstants.GET_POSTS_SUCCESS, data };
  }
  function getPostsFailure(error: string) {
    return { type: postsConstants.GET_POSTS_FAILURE, error };
  }  




// DELETE POSTS ACTIONS //////


function deletePostsRequest(id: any) {
  return { type: postsConstants.DELETE_POSTS_REQUEST, id };
}
function deletePostsSuccess(id: number | string) {
  return { type: postsConstants.DELETE_POSTS_SUCCESS, id };
}
function deletePostsFailure(error: string) {
  return { type: postsConstants.DELETE_POSTS_FAILURE, error };
}  







  export default {
    getPostsRequest,
    getPostsSuccess,
    getPostsFailure,
    deletePostsRequest,
    deletePostsSuccess,
    deletePostsFailure

  }
import { postsConstants } from "../constants/posts.constants";
// Types for store

export interface IPostsState {
  isEditLoading: boolean;
  postsList: {
    isLoading: boolean;
    data: [...data: any];
  };
}

// types for get posts actions

export interface IGetPostsRequestAction {
  type: typeof postsConstants.GET_POSTS_REQUEST;
  payload?: any;
}

export interface IGetPostsSuccessAction {
  type: typeof postsConstants.GET_POSTS_SUCCESS;
  payload?: Array<object>;
}

export interface IGetPostsFailureAction {
  type: typeof postsConstants.GET_POSTS_FAILURE;
  payload: string;
}

// types for delete post actions

export interface IDeletePostsRequestAction {
  type: typeof postsConstants.DELETE_POSTS_REQUEST;
  payload: number | string;
}

export interface IDeletePostsSuccessAction {
  type: typeof postsConstants.DELETE_POSTS_SUCCESS;
  payload: number | string;
}

export interface IDeletePostsFailureAction {
  type: typeof postsConstants.DELETE_POSTS_FAILURE;
  payload: string;
}

export type PostsActionsTypes =
  | IGetPostsRequestAction
  | IGetPostsSuccessAction
  | IGetPostsFailureAction
  | IDeletePostsRequestAction
  | IDeletePostsSuccessAction
  | IDeletePostsFailureAction;

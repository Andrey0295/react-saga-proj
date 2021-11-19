import { postsConstants } from "../constants/posts.constants";
import { IPostsState } from "../types/posts.types";
import { IPostsAction } from "../types/posts.types";

const initialState : IPostsState= {
    isEditLoading: false,
    postsList: { isLoading: false, data: []}
  };


  export function posts(state = initialState, action: any): IPostsState {
    
    switch (action.type) {
      case postsConstants.GET_POSTS_REQUEST:
        return {
          ...state,
          postsList: {...state.postsList, isLoading: true}
        };
      case postsConstants.GET_POSTS_SUCCESS:
        return {
          ...state,
          postsList: {isLoading: false, data: action.data.map((cart: any) => {
            return {...cart, isLoading: false}
          })},
        };
      case postsConstants.GET_POSTS_FAILURE:
        return {
          ...state,
          postsList: {...state.postsList, isLoading: false}
        };
        case postsConstants.DELETE_POSTS_REQUEST:
          return {
            ...state,
            postsList: {...state.postsList},
            isEditLoading: true
          };
        case postsConstants.DELETE_POSTS_SUCCESS:
          return {
            ...state,
            postsList: {...state.postsList, data: [...state.postsList.data.filter(post => post.id !== action.id)]},
            isEditLoading: false
          };
        case postsConstants.DELETE_POSTS_FAILURE:
          return {
            ...state,
            postsList: {...state.postsList},
            isEditLoading: false
          };


        default:
      return state 

    }
    
}

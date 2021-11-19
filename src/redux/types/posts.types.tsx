export interface IPostsState {
  isEditLoading: boolean;
  postsList: {
    isLoading: boolean;
    data: [...data: any];
  };
}

export interface IPostsAction {
  type: string;
  data: Array<object>;
}

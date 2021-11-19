import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsActions from "../../redux/actions/posts.actions";
import { PostsList } from "../PostsList/PostsList";

export const PostsMain = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state: any) => state.posts);

  const handleButtonClick = (): void => {
    dispatch(postsActions.getPostsRequest());
  };

  return (
    <div>
      <h1>Hello, i am posts component</h1>
      <button onClick={handleButtonClick}>Get Posts</button>

      {postsState.postsList.isLoading ? (
        <h2>Loading...Loading...Loading...</h2>
      ) : (
        <PostsList postsData={postsState.postsList.data} />
      )}
    </div>
  );
};

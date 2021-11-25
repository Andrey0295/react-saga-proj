import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsList } from "../PostsList/PostsList";
import postsActions from "../../redux/actions/posts.actions";

export const PostsMain: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const postsState = useSelector((state: any) => state.posts);

  const handleButtonClick = (): void => {
    dispatch(postsActions.getPostsRequest());
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Get Posts</button>
      <h1>Hello example</h1>

      {postsState.isLoading ? (
        <h2>Loading...Loading...Loading...</h2>
      ) : (
        <PostsList postsData={postsState.data} />
      )}
    </div>
  );
};

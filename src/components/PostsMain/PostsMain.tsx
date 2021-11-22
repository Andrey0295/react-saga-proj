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
      <h1>Hello, i am posts component</h1>
      <button onClick={handleButtonClick}>Get Posts</button>

      {postsState.isLoading ? (
        <h2>Loading...Loading...Loading...</h2>
      ) : (
        <PostsList postsData={postsState.data} />
      )}
    </div>
  );
};

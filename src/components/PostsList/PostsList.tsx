import React from "react";
import { useDispatch } from "react-redux";
import { deletePostsRequest } from "../../redux/actions/posts.actions";
import { IPost, IPostsListProps } from "./PostsListTypes";

export const PostsList: React.FC<{ postsData: IPostsListProps }> = ({
  postsData,
}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <ul className="posts_list">
        {postsData.map((post: IPost) => (
          <li
            style={{ border: "1px solid green", marginBottom: 20, width: 300 }}
            key={post.id}
            className="posts_list__card"
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button
              onClick={() => dispatch(deletePostsRequest(post.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

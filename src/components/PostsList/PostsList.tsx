import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import postsActions from "../../redux/actions/posts.actions";
import { IPost } from "./PostsListTypes";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const TitleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 250px;
  height: 200px;
  border: 4px dashed;
  background-color: lightcoral;
  border: 2px solid ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg};
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.txC};
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: aquamarine;
`;

const Posts = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 18px;
  margin: 5px;
  padding: 2px 10px;
  border-radius: 3px;
`;

const themes = {
  lightTheme: {
    fg: "palevioletred",
    bg: "white",
    txC: "black",
  },

  darkTheme: {
    fg: "white",
    bg: "black",
    txC: "white",
  },
};

// This theme swaps `fg` and `bg`

export const PostsList: React.FC<{ postsData: IPost[] }> = ({ postsData }) => {
  const dispatch = useDispatch();
  const [toggleTheme, setToggleTheme] = useState(themes.lightTheme);

  const onChangeTheme = () => {
    setToggleTheme((prevState) => {
      return prevState === themes.lightTheme
        ? themes.darkTheme
        : themes.lightTheme;
    });
  };

  return (
    <>
      <ThemeProvider theme={toggleTheme}>
        <Wrapper>
          <TitleBlock>
            <Title>Hello world</Title>
            <Title>Hello example</Title>
          </TitleBlock>
          <div>
            <button
              onClick={onChangeTheme}
              style={{ minHeight: 40, maxHeight: 80 }}
            >
              {toggleTheme == themes.lightTheme ? "Night" : "Day"}
            </button>
          </div>
          <Posts>
            {postsData.map((post: IPost) => (
              <li
                style={{
                  border: "1px solid green",
                  marginBottom: 20,
                  width: 300,
                }}
                key={post.id}
                className="posts_list__card"
              >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button
                  onClick={() => {
                    dispatch(postsActions.deletePostsRequest(post.id));
                  }}
                  type="button"
                >
                  Delete
                </button>
              </li>
            ))}
          </Posts>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

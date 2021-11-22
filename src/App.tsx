import React from "react";
import "./App.css";
import { PostsMain } from "./components/PostsMain/PostsMain";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <PostsMain />
    </div>
  );
};

export default App;

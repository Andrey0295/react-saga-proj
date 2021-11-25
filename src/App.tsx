import React, { useState, useEffect } from "react";
import "./App.css";
import { PostsMain } from "./components/PostsMain/PostsMain";

const App: React.FC = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const [effect, setEffect] = useState(0);

  function handleClick() {
    setValue((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("Load 1");
    setEffect((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("Load 2");
  }, [value]);

  return (
    <div className="App">
      <h1>{effect}</h1>
      <button onClick={handleClick} type="button">
        {value}
      </button>
      <PostsMain />
    </div>
  );
};

export default App;

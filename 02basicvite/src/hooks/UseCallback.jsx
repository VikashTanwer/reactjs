import React, { useCallback, useState } from "react";
import Header from "./Header";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const newFn= useCallback(()=> {}, []);
  return (
    <div style={{
      margin: "200px"
    }}>
      <Header newFn = {newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click here</button>
    </div>
  );
};

export default UseCallback;

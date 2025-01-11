import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [counter, setCounter] = useState(0);
  function cubeNum(num) {
    console.log("calculation done");
    return Math.pow(num, 3);
  }
  const result = useMemo(() => cubeNum(num), [num]);
  return (
    <>
      <div>
        <input
          type="number"
          placeholder="enter your number"
          value={num}
          onChange={(e) => {
            setNum((prev) => e.target.value);
          }}
        ></input>
        <h1>cube of this number : {result}</h1>
        <button
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
        >
          counter++
        </button>
        <h2> counter is : {counter}</h2>
      </div>
    </>
  );
};

export default UseMemo;

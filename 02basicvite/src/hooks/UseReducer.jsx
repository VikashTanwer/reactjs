import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = { count: 0 };

  // Reducer function to handle state updates
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
        case "input":
            return {count : action.payload}
      default:
        return state;
    }
  };

  // Initialize useReducer with the reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <input type="number" value={ state.count } onChange={(e)=> dispatch({type: "input", payload : e.target.value})}/>
    </div>
  );
};

export default UseReducer;

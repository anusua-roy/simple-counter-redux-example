import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./context";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        disabled={counter === 0}
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>&nbsp;{counter}&nbsp;</span>
      <button
        disabled={counter === 10}
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "../service/actions";

export const Dummy = () => {
  const getstore = useSelector((state) => {
    return state.count;
  });

  const dispatch = useDispatch();
  function incremnetDummy() {
    dispatch(incrementAction());
  }

  function decrement() {
    dispatch(decrementAction());
  }
  
  return (
    <div>
      <h1>Dummy Counter</h1>
      <p>dummy counter is {getstore}</p>
      <button onClick={incremnetDummy}>+</button>
      <button onClick={decrement} style={{ margin: "10px" }}>
        +
      </button>
    </div>
  );
};

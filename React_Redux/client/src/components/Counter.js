import { useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "../service/actions";

export const Counter = () => {
  const countFromStore = useSelector((state) => {
    return state.count;
  });

  const dispatch = useDispatch();

  function increment() {
    dispatch(incrementAction());
  }

  function decrement() {
    dispatch(decrementAction());
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>Count is {countFromStore}</div>
      <button onClick={increment} style={{ margin: "10px" }}>
        +
      </button>
      <button onClick={decrement}>-</button>
    </div>
  );
};



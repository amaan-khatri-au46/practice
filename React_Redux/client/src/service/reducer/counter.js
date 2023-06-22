// There Can Be Multiple Function Inside
// here we need To Set the Preveous State Inside this Redux
export const updatecounter = (prevState = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return prevState + 1;
    case "DECREMENT":
      return prevState - 1;
    default:
      return prevState;
  }
};


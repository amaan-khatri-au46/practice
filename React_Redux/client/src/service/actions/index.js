// Action Create Returns A Fucntion Which Retuns An Action 
// Actions are specified to What You wnated To do  
// action will Only holds The data and the name 
// Actions Will holds The Data 


export const incrementAction = () => {
    return (dispatch) => {
      dispatch({ type: 'INCREMENT' });
    };
  };

  export const decrementAction = () => {
    return (dispatch) => {
      dispatch({ type: 'DECREMENT' });
    };
  };

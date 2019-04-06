import { createStore } from "redux";

const add = ({ a, b }) => {
  return a + b;
};

console.log(add({ a: 1, b: 12 }));

// Action generators - functions that return action objects
// const incrementCount = (
//   payload = {} /* This default should be used to removve undefined object's property accessing error */
// ) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      //if (state.count > 0 && state.count - decrementBy >= 0) {
      return {
        count: state.count - decrementBy
      };
    //}

    case "RESET":
      return {
        count: 0
      };

    case "SET":
      return {
        count: action.count
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());

// store.dispatch(resetCount());

store.dispatch(setCount({ count: 102 }));

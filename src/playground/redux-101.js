import { createStore } from 'redux';

// with object destructuring on the input argument
// const add = ({a, b}) => {
//   return a + b;
// };

// console.log(add({ a:1, b:3 }));

// Action generators - functions that return action objects
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// with object destructuring
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

// no need for a default for payload, this forces the user to include this argument
const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});


/* Reducers
  1. Reducers are pure functions
    - output only determined by the input: is not changed by / does not change things
      outside the scope of the function
  2. Never change state or action */

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
      default:
        return state;
  }
};

// the passed in function gets run right away (that's why a default is provided).
// This function is a reducer - specifies how the app's state changes in response
// to the actions
const store = createStore(countReducer);

// the function passed in to subscribe runs everytime the store changes.
// the return value of subscribe is a function to unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions: an object that gets sent to the store
// increment, decrement, reset are some Actions for this example
// redux uses all caps for action type

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

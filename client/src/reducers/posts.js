/* eslint-disable import/no-anonymous-default-export */

// This reducer is a function that takes in a state and an action to enact on the "state". Because there are multiple actions, we use a switch in this case.
// WE have to set initial state, which is an empty array.
export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
};

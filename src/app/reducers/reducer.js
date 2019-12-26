const initialState = {
  count: 0
};
function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
      break;

    case "DECREMENT":
      return {
        count: state.count - 1
      };
      break;

    case "RESET":
      return initialState;
      break;

    default:
      break;
  }
  return state;
}
export default reducer;

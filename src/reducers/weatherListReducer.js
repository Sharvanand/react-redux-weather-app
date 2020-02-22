export default (state = {}, action) => {
  if (action.type === "FETCH_WEATHERLIST") {
    return action.payload;
  }
  return {
    ...state
  };
};

export const setName = name => async (dispatch) => {
  dispatch({ type: 'SET_NAME', payload: name });
};

export const setIsLoginActive = isActive => async (dispatch) => {
  dispatch({ type: 'SET_LOGIN_ACTIVE', payload: isActive });
};

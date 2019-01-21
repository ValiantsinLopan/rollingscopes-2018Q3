export const setUserName = name => async (dispatch) => {
  dispatch({ type: 'SET_NAME', payload: name });
};

export const setUserScore = score => async (dispatch) => {
  dispatch({ type: 'SET_SCORE', payload: score });
};

export const setMonstersKilled = killed => async (dispatch) => {
  dispatch({ type: 'SET_MONSTERS_KILLED', payload: killed });
};

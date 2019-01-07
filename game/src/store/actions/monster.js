export const setMonsterName = name => async (dispatch) => {
  dispatch({ type: 'SET_MONSTER_NAME', payload: name });
};

export const setMonsterScore = score => async (dispatch) => {
  dispatch({ type: 'SET_MONSTER_SCORE', payload: score });
};

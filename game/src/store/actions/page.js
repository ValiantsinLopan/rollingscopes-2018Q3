export const setIsLoginActive = isActive => async (dispatch) => {
  dispatch({ type: 'SET_LOGIN_ACTIVE', payload: isActive });
};

export const setIsSelectSpellActive = isActive => async (dispatch) => {
  dispatch({ type: 'SET_SELECT_SPELL_ACTIVE', payload: isActive });
};

export const setIsScoreActive = isActive => async (dispatch) => {
  dispatch({ type: 'SET_SCORE_ACTIVE', payload: isActive });
};

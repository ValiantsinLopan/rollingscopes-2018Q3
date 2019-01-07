export const setIsTaskActive = isActive => async (dispatch) => {
  dispatch({ type: 'SET_TASK_ACTIVE', payload: isActive });
};

export const setIsAttack = isAttack => async (dispatch) => {
  dispatch({ type: 'SET_IS_ATTACK', payload: isAttack });
};

export const getTask = type => async (dispatch) => {
  const task = {};
  dispatch({ type: 'LOAD_TASK', payload: task });
};

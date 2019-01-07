import AritmeticsTask from '../utils/tasks/arithmetic'

export const setIsTaskActive = isActive => async (dispatch) => {
  dispatch({ type: 'SET_TASK_ACTIVE', payload: isActive });
};

export const setIsAttack = isAttack => async (dispatch) => {
  dispatch({ type: 'SET_IS_ATTACK', payload: isAttack });
};

export const getTask = type => async (dispatch) => {
  let task = {};
  switch (type) {
    case 'arithmetics':
      task = new AritmeticsTask(0, 10).getTask();
      break;
    default:
      task = new AritmeticsTask(0, 10).getTask();
  }
  dispatch({ type: 'LOAD_TASK', payload: task });
};

import AritmeticsTask from '../utils/tasks/arithmetic';
import TranslationTask from '../utils/tasks/translation';

export const setIsTaskActive = isActive => async (dispatch) => {
  dispatch({ type: 'SET_TASK_ACTIVE', payload: isActive });
};

export const setIsAttack = isAttack => async (dispatch) => {
  dispatch({ type: 'SET_IS_ATTACK', payload: isAttack });
};

export const getTask = type => async (dispatch) => {
  let task = {};
  console.log(type);
  switch (type) {
    case 'arithmetics':
      task = new AritmeticsTask(0, 10).getTask();
      break;
    case 'translation':
      task = new TranslationTask().getTask();
      break;
    default:
      task = new AritmeticsTask(0, 10).getTask();
      break;
  }
  dispatch({ type: 'LOAD_TASK', payload: task });
};

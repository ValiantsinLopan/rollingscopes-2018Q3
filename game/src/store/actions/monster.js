import MonsterNameGenerator from '../utils/MonsterNameGenerator';

export const setMonsterName = () => async (dispatch) => {
  const name = new MonsterNameGenerator().generate();
  dispatch({ type: 'SET_MONSTER_NAME', payload: name });
};

export const setMonsterScore = score => async (dispatch) => {
  dispatch({ type: 'SET_MONSTER_SCORE', payload: score });
};

export const initialState = {
  name: '',
  score: 100,
};

export function monsterReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MONSTER_NAME':
      return { ...state, name: action.payload };
    case 'SET_MONSTER_SCORE':
      return { ...state, score: action.payload };
    default:
      return state;
  }
}

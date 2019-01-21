export const initialState = {
  name: '',
  score: 100,
  monstersKilled: 0,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_SCORE':
      return { ...state, score: action.payload };
    case 'SET_MONSTERS_KILLED':
      return { ...state, monstersKilled: action.payload };
    default:
      return state;
  }
}

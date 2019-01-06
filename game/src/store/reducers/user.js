export const initialState = {
  name: 'Unknown user',
  score: 100,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

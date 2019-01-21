export const initialState = {
  users: [
  ],
};

export function scoreReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

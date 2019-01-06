export const initialState = {
  isLoginActive: true,
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN_ACTIVE':
      return { ...state, isLoginActive: action.payload };
    default:
      return state;
  }
}

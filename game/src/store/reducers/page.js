export const initialState = {
  isLoginActive: true,
  isSelectSpellActive: false,
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN_ACTIVE':
      return { ...state, isLoginActive: action.payload };
    case 'SET_SELECT_SPELL_ACTIVE':
      return { ...state, isSelectSpellActive: action.payload };
    default:
      return state;
  }
}

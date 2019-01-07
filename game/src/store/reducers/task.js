export const initialState = {
  isActive: false,
  isAttack: true,
  description: '',
  note: '',
  task: '',
  expectedAnswer: '',
};

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TASK_ACTIVE':
      return { ...state, isActive: action.payload };
    case 'SET_IS_ATTACK':
      return { ...state, isAttack: action.payload };
    case 'LOAD_TASK':
      return {
        ...state,
        description: action.payload.description,
        note: action.payload.note,
        task: action.payload.task,
        expectedAnswer: action.payload.expectedAnswer,
      };
    default:
      return state;
  }
}

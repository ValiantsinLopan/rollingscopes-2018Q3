export const addUserToScore = (userName, userScore, gameEndTime) => async (dispatch, getState) => {
  const user = { name: userName, score: userScore, time: gameEndTime };
  const existingUsers = getState().score.users;
  existingUsers.push(user);
  dispatch({ type: 'ADD_USER', payload: existingUsers });
};

export const createGoalAction = goal => {
  goal.id = Math.random() * 100000000000;
  return {
    type: "CREATE_GOAL",
    goal
  };
};

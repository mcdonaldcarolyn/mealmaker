let goals = [
  { id: 1, goal: "Become better at testing apps" },
  { id: 2, goal: "Become a google dev expert" }
];
const createGoal = (state = goals, action) => {
  const { goal } = action;
  switch (action.type) {
    case "CREATE_GOAL":
      return [...state, goal];
    default:
      return state;
  }
};
export default createGoal;

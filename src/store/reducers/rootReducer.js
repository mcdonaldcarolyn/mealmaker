import { combineReducers } from "redux";
import createGoal from "./createGoal";
const rootReducer = combineReducers({
  goals: createGoal
});
export default rootReducer;

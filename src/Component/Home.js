import React from "react";
import Todo from "./Todo";
import Goals from "./Goals";
class Home extends React.Component {
  state = {
    goals: [
      { id: 1, goal: "Become better at testing apps" },
      { id: 2, goal: "Become a google dev expert" }
    ]
  };
  addAGoal = goals => {
    goals.id = Math.random() * 100000000000;
    let goal = [...this.state.goals, goals];
    this.setState({
      goals: goal
    });
  };
  render() {
    return (
      <div className="container">
        <Todo addAGoal={this.addAGoal} />
        <Goals goals={this.state.goals} />
      </div>
    );
  }
}
export default Home;

import React from "react";
import { connect } from "react-redux";
import { createGoalAction } from "../store/actions/createGoal";

class Todo extends React.Component {
  state = {
    goal: ""
  };
  getGoal = e => {
    e.preventDefault();
    if (this.state.goal !== "") {
      this.props.createGoal(this.state);
      this.setState({ goal: "" });
    }
  };
  render() {
    return (
      <div>
        <div className="row">
          <form
            className="col s12"
            style={{ marginTop: "70px" }}
            onSubmit={this.getGoal}
          >
            <input
              type="text"
              onChange={e => {
                this.setState({ goal: e.target.value });
              }}
              value={this.state.goal}
              required
            />
            <div className="center">
              <button className="btn btn-large blue" onClick={this.getGoal}>
                Add Goal
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createGoal: (goal) => { dispatch(createGoalAction(goal))}
  }
}
export default connect(null, mapDispatchToProps)(Todo);

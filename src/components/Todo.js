import React from "react";
class Todo extends React.Component {
  state = {
    goal: ""
  };
  getGoal = e => {
    e.preventDefault();
    if (this.state.goal !== "") {
      this.props.addAGoal(this.state);
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
export default Todo;

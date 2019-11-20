import React from "react";
import { Link } from "react-router-dom";
const Goals = ({ goals }) => {
  let goal;
  goals.length === 0
    ? (goal = <h5>You haven't set a goal</h5>)
    : (goal = goals.map(g => {
        return (
          <li className="collection-item" key={g.id}>
            {g.goal}
            <Link className="secondary-content" to="/">
              <i className="material-icons">edit</i>
            </Link>
            <Link className="secondary-content" to="/">
              <i className="material-icons">delete</i>
            </Link>
          </li>
        );
      }));
  return (
    <div>
      <ul className="collection">{goal}</ul>
    </div>
  );
};
export default Goals;

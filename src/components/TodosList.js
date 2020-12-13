import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodosList = ({ todos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        overflowY: "auto",
        overflowX: "hidden"
      }}
    >
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ todos }) => ({
  todos
});
export default connect(mapStateToProps)(TodosList);

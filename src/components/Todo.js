import { Button, Card, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodo.action";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "5px",
        cursor: "pointer",
        height: "90px",
        margin: "auto",
      }}
      className="todo"
    >
      <Typography variant="h6" style={{margin: "auto"}} >{selected === idx ? text : todo}</Typography>
      <Button onClick={() => editTodo(idx)} style={{ marginLeft: "auto" }}  ><EditIcon/> </Button>
      <Button onClick={() => deleteTodo(idx)}>
        <DeleteIcon/>
      </Button>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

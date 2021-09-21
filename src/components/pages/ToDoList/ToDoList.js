import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import TaskItem from "components/layout/TaskItem";

const ToDoList = () => {
  return <>
    <ListGroup>
      <TaskItem></TaskItem>
      <TaskItem></TaskItem>
      <TaskItem></TaskItem>
    </ListGroup>
  </>;
};

ToDoList.propTypes = {
  //
};

export default ToDoList;

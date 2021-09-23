import React, { memo } from "react";
import PropTypes from "prop-types";
import { ListGroupItem, Badge, Button } from "react-bootstrap";
import TaskModel from "models/Task";
import { NavLink } from 'react-router-dom'

const TaskItem = ({ task }) => {

  return <ListGroupItem variant={task.getVariant()}>
    <h2 className='d-inline'>{task.title}</h2>
    <Badge
      className='float-end'
      bg={task.getVariant()}
      text={["warning", "light"].includes(task.getVariant()) ? "dark" : "light"}>
      {task.getStatus()}
    </Badge>
    {task.description && <p className='m-0'>{task.description}</p>}
    <p className='m-0'>Deadline : {task.deadline.toLocaleDateString()}</p>
    <p className='m-0'>Temps restant : {task.getRemaining()} jours</p>

    <NavLink className="btn btn-dark me-3" to={`/tasks/${task.id}`}>Détails</NavLink>
    <Button variant={task.completed ? 'dark' : task.getVariant()} onClick={() => { }}>
      {task.completed ? 'Annuler' : 'Terminer'}
    </Button>

  </ListGroupItem>;
};

TaskItem.propTypes = {
  task: PropTypes.instanceOf(TaskModel).isRequired,

};

export default memo(TaskItem);

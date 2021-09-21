import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import TaskItem from "components/layout/TaskItem";
import TaskModel from "models/Task";

const initialList = [
  new TaskModel({ id: 1, title: 'Finaliser les maquettes', completed: true, priority: "high" }),
  new TaskModel({ id: 2, title: 'Développer l\'interface', completed: false, priority: "high" }),
  new TaskModel({ id: 3, title: 'Completer l\'API', completed: false, priority: "medium" }),
  new TaskModel({ id: 4, title: 'Préparer la démo', completed: false, priority: "low" }),
]

const ToDoList = () => {

  const [list, setlist] = useState(initialList)

  const updateCompleted = (completed, task = null) => {
    setlist((oldlist) => oldlist.map((t) => {
      //t.id === task.id ? new TaskModel({ ...t, completed: completed }) : t)
      if (task === null || t.id === task.id)
        t.completed = completed
      return t
    })
    )
  }

  return <>
    <ListGroup>
      {list.map((task) => <TaskItem
        task={task}
        key={task.id}
        updateCompleted={updateCompleted} />)}
      <ListGroupItem className="d-flex justify-content-center">
        <Button className='me-2' variant='dark' onClick={() => updateCompleted(true)}>Tout terminer</Button>
        <Button className='ms-2' variant='dark' onClick={() => updateCompleted(false)}>Tout annuler</Button>
      </ListGroupItem>
    </ListGroup>

  </>;
};

ToDoList.propTypes = {
  //
};

export default ToDoList;

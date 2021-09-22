import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import TaskItem from "components/layout/TaskItem";
import NewTaskForm from "components/layout/NewTaskForm";
import H1 from "components/shared/H1";
import Placeholder from "components/shared/Placeholder";
import { ListContext } from 'contexts/List'
import TaskModel from "models/Task";
import ToDoListFilter from "../ToDoListFilter";

const ToDoListView = ({ list, loading, user, setuser, updateCompleted, addTask, filter }) => {


  return <>
    <H1 title="Ceci est une todolist">To Do List</H1>
    User: <input type="number" value={user.id} onChange={(e) => setuser({ id: +e.target.value })} />
    <ListGroup>
      {
        loading ?
          <ListGroupItem>
            <Placeholder />
          </ListGroupItem>
          :
          <>
            <ListGroupItem>
              <ToDoListFilter filter={filter} />
            </ListGroupItem>
            {list?.map((task) => <TaskItem
              task={task}
              key={task.id}
              updateCompleted={updateCompleted} />)}
            <ListGroupItem className="d-flex justify-content-center">
              <Button className='me-2' variant='dark' onClick={() => updateCompleted(true)}>Tout terminer</Button>
              <Button className='ms-2' variant='dark' onClick={() => updateCompleted(false)}>Tout annuler</Button>
            </ListGroupItem>
            <ListGroupItem>
              <NewTaskForm add={addTask} />
            </ListGroupItem>
          </>
      }
    </ListGroup>
  </>
    ;
};

ToDoListView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.instanceOf(TaskModel)),
  user: PropTypes.object,
  setuser: PropTypes.func,
  updateCompleted: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default ToDoListView;

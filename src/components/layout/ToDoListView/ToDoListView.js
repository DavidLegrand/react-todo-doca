import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import TaskItem from "components/layout/TaskItem";
import H1 from "components/shared/H1";
import Placeholder from "components/shared/Placeholder";
import TaskModel from "models/Task";
import ToDoListFilter from "../ToDoListFilter";

const ToDoListView = ({ list, loading, filter }) => {


  return <>
    <H1 title="Ceci est une todolist">To Do List</H1>

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
            />)}
            <ListGroupItem className="d-flex justify-content-center">
              <Button className='me-2' variant='dark' onClick={() => { }}>Tout terminer</Button>
              <Button className='ms-2' variant='dark' onClick={() => { }}>Tout annuler</Button>
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
};

export default ToDoListView;

import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import TaskItem from "components/layout/TaskItem";
import TaskModel from "models/Task";
import NewTaskForm from "components/layout/NewTaskForm";
import { ListContext } from "contexts/List";
import { UserContext } from "contexts/User";
import API, { arrToObj, objToArr } from 'api'

// const initialList = [
//   new TaskModel({ id: 1, title: 'Finaliser les maquettes', completed: true, priority: "high" }),
//   new TaskModel({ id: 2, title: 'Développer l\'interface', completed: false, priority: "high" }),
//   new TaskModel({ id: 3, title: 'Completer l\'API', completed: false, priority: "medium" }),
//   new TaskModel({ id: 4, title: 'Préparer la démo', completed: false, priority: "low" }),
// ]

const ToDoList = () => {

  const [list, setlist] = useContext(ListContext)
  const [user, setuser] = useContext(UserContext)

  useEffect(() => {
    const options = {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(arrToObj(list))
    }
    const sendData = async () => {
      try {
        const res = await fetch(`${API}tasks.json`, options)
        if (!res.ok) throw new Error(res.statusText)
      } catch (e) { console.log(e) }
    }
    if (list.length) sendData()
  }, [list])


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${API}tasks.json`)
        if (!res.ok) throw new Error(res.statusText)
        else {
          const data = await res.json()
          setlist(
            objToArr(data)
              .filter((t) => t !== null)
              .map((t) => new TaskModel(t))
          )
        }
      } catch (e) { console.log(e) }
    }
    getData()
  }, [])

  const updateCompleted = (completed, task = null) => {
    setlist((oldlist) => oldlist.map((t) => {
      //t.id === task.id ? new TaskModel({ ...t, completed: completed }) : t)
      if (task === null || t.id === task.id)
        t.completed = completed
      return t
    })
    )
  }

  const getNewId = () => {
    return list.length === 0 ? 1 : list.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1
  }

  const addTask = (newTask) => {
    setlist((oldlist) => [...oldlist, new TaskModel({
      ...newTask,
      id: getNewId(),
      createdBy: user.id,
      assignedTo: user.id
    })
    ])
  }

  return <>
    User : <input type="number" value={user.id} onChange={(e) => setuser({ id: +e.target.value })} />
    <ListGroup>
      {list
        .filter((task) => task.assignedTo === user.id)
        .map((task) => <TaskItem
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
    </ListGroup>

  </>;
};

ToDoList.propTypes = {
  //
};

export default ToDoList;

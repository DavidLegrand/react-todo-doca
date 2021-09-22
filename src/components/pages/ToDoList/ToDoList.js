import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import TaskModel from "models/Task";
import { ListContext } from "contexts/List";
import { UserContext } from "contexts/User";
import useFetch from "hooks/useFetch";
import ToDoListView from "components/layout/ToDoListView";
import Placeholder from "components/shared/Placeholder";


// const initialList = [
//   new TaskModel({ id: 1, title: 'Finaliser les maquettes', completed: true, priority: "high" }),
//   new TaskModel({ id: 2, title: 'Développer l\'interface', completed: false, priority: "high" }),
//   new TaskModel({ id: 3, title: 'Completer l\'API', completed: false, priority: "medium" }),
//   new TaskModel({ id: 4, title: 'Préparer la démo', completed: false, priority: "low" }),
// ]

const ToDoList = () => {

  const [list, setlist] = useContext(ListContext)
  const [user, setuser] = useContext(UserContext)
  const [filteredList, setfilteredList] = useState(list)
  const [filter, setFilter] = useState('all')

  const { data, error, loading } = useFetch('tasks.json')

  useEffect(() => setlist(data?.map((t) => new TaskModel(t))), [data, setlist])

  useEffect(() => setfilteredList(
    list?.filter((task) => task.assignedTo === user.id)
      .filter((task) => {
        if (filter === 'completes') return task.completed
        else if (filter === 'uncompletes') return !task.completed
        else return true
      })), [list, filter, user])

  // useEffect(() => {
  //   const options = {
  //     method: 'PUT',
  //     mode: 'cors',
  //     body: JSON.stringify(arrToObj(list))
  //   }
  //   const sendData = async () => {
  //     try {
  //       const res = await fetch(`${API}tasks.json`, options)
  //       if (!res.ok) throw new Error(res.statusText)
  //     } catch (e) { console.log(e) }
  //   }
  //   if (list.length) sendData()
  // }, [list])

  const updateCompleted = useCallback((completed, task = null) => {
    setlist((oldlist) => oldlist.map((t) => {
      //t.id === task.id ? new TaskModel({ ...t, completed: completed }) : t)
      if (task === null || t.id === task.id)
        t.completed = completed
      return t
    })
    )
  }, [setlist])

  const addTask = useCallback((newTask) => {
    const getNewId = () => {
      return list.length === 0 ? 1 : list.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1
    }
    setlist((oldlist) => [...oldlist, new TaskModel({
      ...newTask,
      id: getNewId(),
      createdBy: user.id,
      assignedTo: user.id
    })
    ])
  }, [list, setlist, user.id])

  return <ToDoListView
    list={filteredList}
    error={error}
    loading={loading}
    user={user}
    setuser={setuser}
    updateCompleted={updateCompleted}
    addTask={addTask}
    filter={[filter, setFilter]}
  />

};

ToDoList.propTypes = {
  //
};

export default ToDoList;

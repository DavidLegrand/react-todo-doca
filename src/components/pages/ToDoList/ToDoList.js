import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import TaskModel from "models/Task";
import { UserContext } from "contexts/User";
import useFetchList from "hooks/useFetchList";
import ToDoListView from "components/layout/ToDoListView";
import { connect } from "react-redux";
import { fetchTasks } from 'store/actions'



const ToDoList = ({ list, error, loading, fetchTasks }) => {

  const [user] = useContext(UserContext)
  const [filteredList, setfilteredList] = useState(list)
  const [filter, setFilter] = useState('all')

  useEffect(() => { fetchTasks() }, [])

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

  // const updateCompleted = useCallback((completed, task = null) => {
  //   setlist((oldlist) => oldlist.map((t) => {
  //     //t.id === task.id ? new TaskModel({ ...t, completed: completed }) : t)
  //     if (task === null || t.id === task.id)
  //       t.completed = completed
  //     return t
  //   })
  //   )
  // }, [setlist])

  // const addTask = useCallback((newTask) => {
  //   const getNewId = () => {
  //     return list.length === 0 ? 1 : list.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1
  //   }
  //   setlist((oldlist) => [...oldlist, new TaskModel({
  //     ...newTask,
  //     id: getNewId(),
  //     createdBy: user.id,
  //     assignedTo: user.id
  //   })
  //   ])
  // }, [list, setlist, user.id])

  return <ToDoListView
    list={filteredList}
    error={error}
    loading={loading}
    filter={[filter, setFilter]}
  />

};

ToDoList.propTypes = {
  //
};

export default connect(
  (state) => ({
    list: state.list.data,
    error: state.list.error,
    loading: state.list.loading
  }),
  (dispatch) => { return { fetchTasks: () => dispatch(fetchTasks()) } }
)(ToDoList);

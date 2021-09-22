import React from 'react'
import { Switch, Route } from 'react-router'
import Home from 'components/pages/Home'
import ToDoList from 'components/pages/ToDoList'
import NewTaskForm from 'components/pages/NewTaskForm'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/tasks' component={ToDoList} />
      <Route exact path='/tasks/new' component={NewTaskForm} />
    </Switch>
  )
}

export default Routes

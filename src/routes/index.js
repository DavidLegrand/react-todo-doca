import React from 'react'
import { Switch, Route } from 'react-router'
import Home from 'components/pages/Home'
import ToDoList from 'components/pages/ToDoList'
import NewTaskForm from 'components/pages/NewTaskForm'
import TaskDetails from 'components/pages/TaskDetails'
import NotFound from 'components/pages/NotFound'
import Login from 'components/pages/Login'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/tasks' component={ToDoList} />
      <Route exact path='/tasks/new' component={NewTaskForm} />
      <Route exact path='/tasks/:id' component={TaskDetails} />
      <Route exact path='/login' component={Login} />
      <Route path='404' component={NotFound} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default Routes

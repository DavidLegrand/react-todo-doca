import { LoggedContext } from 'contexts/Logged'
import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

const LoggedRoute = (props) => {

  const [isLogged] = useContext(LoggedContext)

  return (isLogged ? <Route {...props} /> : <Redirect to='/login' />
  )
}

export default LoggedRoute

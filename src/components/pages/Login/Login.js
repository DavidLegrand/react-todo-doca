import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { UserContext } from "contexts/User";
import { LoggedContext } from "contexts/Logged";
import H1 from "components/shared/H1";
import { Form, FormLabel, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Redirect } from "react-router";

const Login = () => {
  const [user, setuser] = useContext(UserContext)
  const [isLogged, setIsLogged] = useContext(LoggedContext)

  const [form, setForm] = useState({
    login: 'david',
    password: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.login === 'david') {
      setuser({ id: 1, login: 'david', firstName: 'David', lastName: 'Legrand' })
      setIsLogged(true)
    }
  }

  return <>
    {isLogged ?
      <Redirect to='/' /> :
      <>
        <H1>Se connecter</H1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Login</FormLabel>
            <FormControl required name="login" onChange={handleChange} value={form.login} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl name="password" type="password" onChange={handleChange} value={form.password} />
          </FormGroup>
          <FormGroup>
            <Button variant="success" type="submit">Se connecter</Button>
          </FormGroup>
        </Form>
      </>
    }
  </>
};

Login.propTypes = {
  //
};

export default Login;

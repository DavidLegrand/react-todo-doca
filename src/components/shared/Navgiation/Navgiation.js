import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { LoggedContext } from "contexts/Logged";


const Navgiation = () => {
  const [isLogged, setIsLogged] = useContext(LoggedContext)
  return <Navbar bg="dark" variant="dark" expand="lg">
    <Nav as="ul" className="me-auto">
      <Nav.Item as="li"><NavLink to="/" className="nav-link" exact>Accueil</NavLink></Nav.Item>
      <Nav.Item as="li"><NavLink to="/tasks" className="nav-link" exact>Todolist</NavLink></Nav.Item>
      <Nav.Item as="li"><NavLink to="/tasks/new" className="nav-link" exact>Nouvelle tâche</NavLink></Nav.Item>
    </Nav>
    <LogoutButton isLogged={isLogged} setIsLogged={setIsLogged} />
  </Navbar>

};


const LogoutButton = ({ isLogged, setIsLogged }) => {
  return isLogged && <Button variant="outline-danger" onClick={() => setIsLogged(false)}>Déconnexion</Button>
}

Navgiation.propTypes = {
  //
};

export default Navgiation;

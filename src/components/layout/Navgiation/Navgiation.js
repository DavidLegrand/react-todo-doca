import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Navgiation = () => {
  return (<Navbar bg="dark" variant="dark" expand="lg">
    <Nav as="ul">
      <Nav.Item as="li"><NavLink to="/" className="nav-link" exact>Accueil</NavLink></Nav.Item>
      <Nav.Item as="li"><NavLink to="/tasks" className="nav-link" exact>Todolist</NavLink></Nav.Item>
      <Nav.Item as="li"><NavLink to="/tasks/new" className="nav-link" exact>Nouvelle tâche</NavLink></Nav.Item>
    </Nav>
  </Navbar>)
    ;
};

Navgiation.propTypes = {
  //
};

export default Navgiation;

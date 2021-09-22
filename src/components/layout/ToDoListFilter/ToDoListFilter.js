import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const ToDoListFilter = ({ filter }) => {
  return <Form.Control as="select" value={filter[0]} onChange={(e) => filter[1](e.target.value)}>
    <option value='all' default>Tout afficher</option>
    <option value='completes'>Terminées</option>
    <option value='uncompletes'>En cours</option>
  </Form.Control>;
};

ToDoListFilter.propTypes = {
  //
};

export default ToDoListFilter;

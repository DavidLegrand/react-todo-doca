import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, FormControl, FormLabel, FormCheck, Button } from 'react-bootstrap'
import TaskModel, { priorities } from "models/Task";

const NewTaskForm = ({ add }) => {
  const [form, setform] = useState(new TaskModel())

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    setform(new TaskModel({ ...form, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    add(form)
    setform(new TaskModel())
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Titre</FormLabel>
        <FormControl onChange={handleChange} name="title" value={form.title} /></FormGroup>
      <FormGroup>
        <FormLabel>Description</FormLabel>
        <FormControl onChange={handleChange} as="textarea" name="description" value={form.description} /></FormGroup>
      <FormGroup>
        <FormLabel>Statut</FormLabel>
        <FormCheck onChange={handleChange} name="completed" label={form.completed ? "Terminée" : "En cours"} checked={form.completed} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Priorité</FormLabel>
        <FormControl onChange={handleChange} as="select" name="_priority" value={form.priority}>
          {Object.entries(priorities).map(([key, value]) => <option key={key} value={value}>{value}</option>)}
        </FormControl>
      </FormGroup>
      <FormGroup>
        <Button variant="success" type="submit">Enregistrer</Button>
      </FormGroup>
    </Form>

  );
};

NewTaskForm.propTypes = {
  add: PropTypes.func.isRequired
};

export default NewTaskForm;

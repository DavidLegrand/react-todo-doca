import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ToDoList from '../ToDoList';

function App() {
  const title = "To Do List"
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='display-4 text-center'>{title}</h1>
          <ToDoList></ToDoList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

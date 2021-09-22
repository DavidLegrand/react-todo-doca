import { ListProvider } from 'contexts/List';
import { UserProvider } from 'contexts/User';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ToDoList from '../ToDoList';
import './App.css'


function App() {
  const title = "To Do List"
  return (
    <ListProvider>
    <UserProvider>

      <Container>
        <Row>
          <Col>
            <h1 className='display-4 text-center'>{title}</h1>
            <ToDoList></ToDoList>
          </Col>
        </Row>
      </Container>

    </UserProvider>
    </ListProvider>
  );
}

export default App;

import { ListProvider } from 'contexts/List';
import { UserProvider } from 'contexts/User';
import React, { useState, useEffect, useCallback, memo, useMemo } from 'react'
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
              <ToDoList></ToDoList>
            </Col>
          </Row>
        </Container>
      </UserProvider>
    </ListProvider>
  );
}

export default App;


// const ChildComponent = memo(({ log }) => {
//   useEffect(() => console.log('children re render'))
//   return <div style={{ border: '1px silver solid', padding: '1%', margin: '1%' }}>
//     Child
//     <button onClick={log}>Log the name</button>
//   </div>
// })

// function ParentComponent() {
//   const [name, setname] = useState('John')
//   const [age, setage] = useState(42)
//   const logName = useCallback(() => console.log(name), [name])
//   return <>
//     <div style={{ border: '1px silver solid', padding: '1%', margin: '1%' }}>
//       Parent
//       <input type="number" value={age} onChange={(e) => setage(+e.target.value)} />
//       <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
//       <ChildComponent log={logName} />
//     </div>
//   </>
// }
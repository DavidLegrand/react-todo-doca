import React, { useState } from "react";
import { Button } from "react-bootstrap";

import store from 'store'
import { increment } from 'store/actions'

const Redux = () => {
  const [counter, setcounter] = useState(0)
  store.subscribe(() => setcounter(store.getState().counter))
  const handleClick = () => store.dispatch(increment())

  return <>
    <h1>Compteur : {counter} </h1>
    <Button onClick={handleClick}>{counter}++</Button>
  </>;
};


export default Redux;

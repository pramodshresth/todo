import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Alert } from 'bootstrap';

const Todo = () => {
    const [todoList, setTodoList]=useState([]);
    const [text, setText]=useState("");
    const todoDetails = {
      title : text,
      time : Date.now(),
      isCompleted: false,
    }
  return (
    <Container className='mt-3 text-center'>
        <h3>ToDo List</h3>
        <Form.Control onChange={ (e) => setText(e.target.value)} type='text'/>
        <Button className='mt-2' onClick={()=> setTodoList([...todoList,todoDetails])}>Add</Button>

        {todoList.map((data)=>{
          return <Alert>{data.name}</Alert>
        })}
    </Container>
  )
}

export default Todo
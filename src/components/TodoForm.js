import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    
    addTodo(value);

    e.preventDefault();

    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='What is the task today?' onChange={(e) => {
          setValue(e.target.value)
        }} />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
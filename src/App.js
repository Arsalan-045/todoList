import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"

const App = () => {

  //todoList stores an array of todoItems & setTodoList is update 
  const [todoList, setTodoList] = useState([]);

  //newTodo will store the Text input for newTodo item & setNewTodo will update the newTodo State.
  const [newTodo, setNewTodo]   = useState('');


  //Adding TodoList function 
  const hanleAddTodo = ()=>{

    if(newTodo.trim()!=='')
    {
      const newTodoItem = {
        id : uuidv4(),
        text : newTodo,
      };

      setTodoList([...todoList, newTodoItem]);
      setNewTodo('');
    }
  }

  //Remove Function
  const handleRemoveTodo = (id)=>{

    const updatedList = todoList.filter((item)=>item.id!==id);
    setTodoList(updatedList);
  }

  return (
    <div className='App'>
      <h1>Todo List App</h1>

      <div className='todo-container'>

        <div className='todo-input'>

          {/* Input Field to add input item */}
          <input 
          type='text' 
          value = {newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
          placeholder='Enter Todo Item...'
          />
          {/*Button to add the todo item*/}
          <button onClick={hanleAddTodo}>Add</button>
        </div>

        <div className='todo-list'>
          
          {todoList.map((item)=>(
            <div key={item.id} className='todo-item'>
              <span>{item.text}</span>
              <button onClick={()=>handleRemoveTodo(item.id)}>Remove</button>
            </div>
          ))}
        </div>

      </div>

      
    </div> 
  )
}

export default App;

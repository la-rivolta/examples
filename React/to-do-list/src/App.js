import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem.js';
import todosData from './ToDoItem/todosData.js';

class CreateItem {
  constructor(id, text, completed){
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}

  function App () {
    const initialState = JSON.parse(localStorage.getItem('words')) || [];  
    let [todos, setTodos] = useState(initialState);  //создаю state для данных из local storage и дальше работаю только с ним
    


    const [name, setName] = useState('');
    let nameRef = useRef();

    const handleInput = () =>{
      setName(nameRef.current.value);
    }
    
    const onSubmit = () => {
      const newTodo = 
        {
          id: Math.round(Math.random()*100000), 
          text: name, 
          completed: false
        }
      const newState = [newTodo,...todos];
      setTodos(newState);
      localStorage.setItem('words', JSON.stringify(newState));
      setName('');
      }
 
    const onDelete = id => {
      const newState = todos.filter( todo => todo.id !== id)
      setTodos(newState)
      localStorage.setItem('words', JSON.stringify(newState));
    }
    
  const handleChange = id =>{
    const newState = todos.map(item => item.id === id ? {...item, completed: !item.completed} : item)
    setTodos(newState);
    localStorage.setItem('words', JSON.stringify(newState));
  } 

    const activeTasks = todos.filter(task => task.completed === false);
    const completedTasks = todos.filter(task => task.completed === true);
    const finalTasks = [...activeTasks,...completedTasks].map( item =>{
        return(
          <div className='App' >
            <div className='newItem' key={item.id}>           
              <ToDoItem
              description={item.text}
              checked={item.completed}
              handleChange={() => handleChange(item.id)}
              /> 
            <button onClick={() => onDelete(item.id)} className='btn'>Удалить</button>
            </div>
          </div>
        )
      })
    return (
      <div className="App">
        <h2 className='myListTitle'>Мой список дел:</h2>
        <div>{finalTasks}</div>
        <input ref={nameRef} className='inputStyle' value={name} onChange={handleInput}/><button onClick={onSubmit} className='btn'>Добавить дело</button>
      </div>
    );
  } 

export default App;

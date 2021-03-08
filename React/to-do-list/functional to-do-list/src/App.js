import './App.css';
import './ToDoItem/ToDoItem.js';
import ToDoItem from './ToDoItem/ToDoItem.js';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      todosItems: localStorage.length < 1 ? [] : JSON.parse(localStorage.getItem('items'))
    }
  }

  changeCompleted = completed => {
    if(completed !== true){
      return true;
    } else {
      return false;
    }
  }

  handleChange = (id) =>{
    const index = this.state.todosItems.map(item => item.id).indexOf(id);
    let { todosItems } = this.state;
    todosItems[index].completed = this.changeCompleted(todosItems[index].completed);
    localStorage.setItem('items', JSON.stringify(todosItems));
    this.setState(() => {
      return todosItems;
    });
  }

  deleteItem = (id) =>{
    let { todosItems } = this.state;
    let index = todosItems.map(item => item.id).indexOf(id);
    todosItems.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(todosItems));
    this.setState(() => {
      return todosItems;
    });
  }

  addTask = () => {
    const { todosItems } = this.state;
    const newItem = {
      id: todosItems.length + 1,
      text: this.myRef.current.value,
      completed: false
    };
    todosItems.push(newItem);
    localStorage.setItem('items', JSON.stringify(todosItems));
    this.setState(() => {
      return todosItems;
    });
  }

  render() {
    const { todosItems } = this.state;
    const activeTasks = todosItems.filter(item => item.completed === false);
    const completedTasks = todosItems.filter(item => item.completed === true);
    const finalTasks = [...activeTasks,...completedTasks].map(item => {
      return ( <ToDoItem
        key={ item.id }
        text={ item.text }
        completed = { item.completed }
        handleChange = {() => this.handleChange(item.id)}
        deleteItem = {() => this.deleteItem(item.id)}
      />
    )})
    return (
      <div className="App">
        <div>{finalTasks}</div>
        <input ref={this.myRef}/>
        <button onClick={this.addTask}>Добавить</button>
      </div>
    );
  }
}

export default App;

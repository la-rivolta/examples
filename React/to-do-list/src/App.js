import './App.css';
import './ToDoItem/ToDoItem.js';
import ToDoItem from './ToDoItem/ToDoItem.js';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      todosItems: localStorage.length < 1 ? [] : JSON.parse(localStorage.getItem('items')),
    };
    this.countId = this.idChange(this.state.todosItems);
  }

  idChange = (todosItems) => {
    if (localStorage.items != '[]'){
      let toDoNumbers = [];
      todosItems.map(item => {
        toDoNumbers.push(item.id);
      })
      return Math.max(...toDoNumbers) + 1;
    } else {
      return 0;
    }
  }

  handleChange = (id) =>{
    let { todosItems } = this.state;
    const index = this.state.todosItems.map(item => item.id).indexOf(id);
    if (todosItems[index].completed === false){
      todosItems[index].completed = true;
    } else {
      todosItems[index].completed = false;
    }
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
      id: this.countId++,
      text: this.myRef.current.value,
      completed: false
    };
    const mainInput = document.getElementById('addDealInput');
    todosItems.push(newItem);
    localStorage.setItem('items', JSON.stringify(todosItems));
    mainInput.value = '';
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
        itemId = { item.id }
        text={ item.text }
        completed = { item.completed }
        handleChange = {() => this.handleChange(item.id)}
        deleteItem = {() => this.deleteItem(item.id)}
      />
    )})
    return (
      <div className="App">
        <h1>Список моих дел</h1>
        <div className='toDoBlock'>{finalTasks}</div>
        <div className="addDeal">
          <input id="addDealInput" className="addDealInput" placeholder="Что еще я хотел бы сделать?" ref={this.myRef}/>
          <button className="addDealButton" onClick={this.addTask}>Добавить</button>
        </div>
      </div>
    );
  }
}

export default App;

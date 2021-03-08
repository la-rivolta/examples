import React from 'react';
import '../App.css'

const ToDoItem = props => {
  const resolvedClass = {
    textDecoration : 'line-through'
  }
    return(
        <div className='todo-item'>
            <div>
              <input type="checkbox" 
              defaultChecked={ props.completed }
              onChange={ props.handleChange }
              />
            </div>
            <div style={ props.checked === true ? resolvedClass : {}}> { props.text } </div>
            <button onClick={ props.deleteItem }>Удалить</button>
        </div>
    )
}

export default ToDoItem;
/** 
 - помыть посуду
 - сделать ДЗ
 - пропылесосить
 */
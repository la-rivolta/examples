import React from 'react';
import '../App.css'
import './ToDoItem.css'

const ToDoItem = props => {
    return(
        <div className='todo-item'>
            <div className="deal">
                <input type="checkbox" className="dealCheck" id={props.itemId}
                defaultChecked={ props.completed }
                onChange={ props.handleChange }
                />
                <label htmlFor={props.itemId} className={ props.completed === true ? 'resolvedClass' : ''}>{ props.text } </label>
            </div>
            <div>
              <button className="addDealButton" onClick={ props.deleteItem }>Удалить</button>
            </div>

        </div>
    )
}

export default ToDoItem;
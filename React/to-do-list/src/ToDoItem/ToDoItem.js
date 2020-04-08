import React from 'react';
import classes from './ToDoItem.module.css';

const ToDoItem = props =>{
    const resolvedClass = {
        textDecoration : 'line-through'
    }
    return(
        <div className={classes.todo}>
            <p className={classes.description} style={props.checked == true ? resolvedClass : {}}>{props.description}</p>
            <input type = 'checkbox' className={classes.checkbox} defaultChecked={props.checked}
            onChange={props.handleChange}
            />
        </div>
    )
}

export default ToDoItem;
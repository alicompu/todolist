import {deleteTodo, updateTodo} from '../redux/actions';
import React, {useState} from 'react'
import {useDispatch} from 'react-redux';

function TodoItem({todo}) {

    const handleKeyDown = (event) => {
        if (event.shiftKey && event.ctrlKey && event.key === 'Delete') {
            dispatch(
                deleteTodo(todo.id)
            );
        }
    }

    const handleUpdateTodo = (e) => {
        dispatch(updateTodo({
            ...todo,
            title: e.target.value
        }));
    }

    let dispatch = useDispatch();

    return (
        <li>
            <input type="text"
                   className="input-item"
                   onKeyDown={handleKeyDown}
                   value={todo.title}
                   onChange={(e) => handleUpdateTodo(e)}/>
        </li>
    )
}

export default TodoItem

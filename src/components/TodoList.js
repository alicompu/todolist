import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux';

function TodoList() {
    let todos = useSelector(state => state);
    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return <TodoItem todo={todo} key={todo.id}/>
                })}
            </ul>
        </div>
    )
}

export default TodoList

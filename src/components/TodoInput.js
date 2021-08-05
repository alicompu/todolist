import React, {useState} from 'react'
import {addTodo} from '../redux/actions'
import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';


function TodoInput() {
    let [title, setTitle] = useState();
    let dispatch = useDispatch();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddItem()
        }
    }

    const handleAddItem = () => {
        dispatch(addTodo({
            id: uuid(),
            title: title,
        }));
        setTitle("");
    }

    return (
        <div>
            <h3>TodoInput</h3>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                    type="text"
                />
                <button
                    onClick={handleAddItem}
                >+
                </button>
            </div>
        </div>
    )
}

export default TodoInput

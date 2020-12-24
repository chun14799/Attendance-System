import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './Components/Todolist';
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const inittodoList = [
        {
            id: 1,
            title: 'Eat',
            status: "new",
        },
        {
            id: 2,
            title: 'Sleep',
            status: "completed",

        },
        {
            id: 3,
            title: 'Code',
            status: "new",

        },
    ]

    const [todoList, setTodoList] = useState(inittodoList);

    const handleTodoClick = (todo,idx) =>{
        // clone ra mảng moi
        const newTodoList = [...todoList];
        // toggle state : thay doi
        const newTodo ={
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        newTodoList[idx] = newTodo;
        // update 
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;
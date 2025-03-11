import React, { useEffect, useReducer } from 'react';
import VtdTodoReducer from '../reducers/VtdTodoReducer'; // Corrected import
import VtdAddTodo from './VtdAddTodo';
import VtdTodoItem from './VtdTodoItem';

export default function VtdTodoList() {
    const [todos, dispatch] = useReducer(VtdTodoReducer, [], () => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh sách công việc</h2>
            <VtdAddTodo dispatch={dispatch} />
            <ul>
                {todos.map((todo) => (
                    <VtdTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}

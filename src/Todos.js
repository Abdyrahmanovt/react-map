import React, {useState} from 'react';

const Todos = () => {
    const [todos,setTodos] = useState(['Drink a coffee','Go to school' ])
    const [newtodo, setNewtodo] = useState()
    const addTodo = ()=>{
        setTodos([...todos,newtodo])
    }
    const addDelete = ()=>{
        setTodos(todos.slice(0,-1))
    }
    return (
        <div>
            <h1>Todos</h1>
            <button onClick={addTodo}>Добавить задачу</button>
            <button onClick={addDelete}>Delete</button>
            <ul>
                {
                    todos.map((todo,index) =>
                    <li key={index}></li>
                    )
                }
            </ul>
        </div>
    );
};

export default Todos;
import React, {useState} from 'react';

const Todos = () => {
    const [todos,setTodos] = useState(['Drink a coffee','Go to school' ])
    const [newTodo, setNewTodo] = useState('')

    const addTodo = ()=>{
        setTodos([...todos,newTodo])
        setNewTodo('')

    }
    const deleteLastTodo = ()=>{
        setTodos(todos.slice(0,-1))
    }


    return (
        <div>
            <h1>Todos</h1>

            <input type="text"  value={newTodo} onChange={(e)=>( setNewTodo(e.target.value))}/>
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteLastTodo}>Delete</button>
            <ul>
                {
                    todos.map((el,index) =>
                    <li key={index}>{el}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default Todos;
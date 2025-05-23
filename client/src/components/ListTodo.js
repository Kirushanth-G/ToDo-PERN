import React, {Fragment, useState, useEffect} from 'react'
import EditTodo from './EditTodo';

function ListTodo() {
    const [todos, setTodos] = useState([]);

    const deleteToDo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    console.log(todos);
  return (
    <Fragment>
        <div className="container">
        <h1 className = "text-center mt-5">
            List of Todos
        </h1>
        <table class="table table-hover mt-2 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td><EditTodo todo ={todo}/></td>
                    <td><button className='btn btn-danger' onClick={() => deleteToDo(todo.todo_id)}>Delete</button></td>
                </tr>
            ))
            }
            </tbody>
        </table>
        </div>
    </Fragment>
    
  )
}

export default ListTodo
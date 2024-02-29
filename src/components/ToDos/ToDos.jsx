import { useResource } from "../../hooks/useResource.js";

const ToDos = () => {
    const todos = useResource('https://jsonplaceholder.typicode.com/todos');

    return (
        <ul>
            {todos?.map((todo) =>
                <li key={todo.id}> <h1>Title: {todo.title}</h1>
                    <p>Completed: {todo.completed}</p>
                </li>)
            }
        </ul>
    )

}

export default ToDos;

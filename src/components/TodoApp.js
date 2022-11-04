import { useState } from "react";
import Todo from "./Todo";
import "./TodoApp.css";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle('');
  };

  const updateHandler = (id, value) => {
    const item = todos.find((item) => (item.id = id));
    item.title = value;
    setTodos(todos);
  };
  
  const deleteHandler = (id) => {
    const temp = todos.filter(item => item.id !== id)
    setTodos(temp);
  };

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={submitHandler}>
        <input onChange={changeHandler} className="todoInput" value={title} />
        <input
          type="submit"
          value="Create todo"
          onClick={submitHandler}
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={updateHandler}
            onDelete={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;

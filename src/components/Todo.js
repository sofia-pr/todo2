import { useState } from "react";
import "./TodoApp.css";

const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {
    setIsEdit(true);
  };

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(props.item.title);

    const submitHandler = (e) => {
      e.preventDefault();
    };

    const changeHandler = (e) => {
      setNewValue(e.target.value);
    };

    const clickHandlerUpdateTodo = () => {
      props.onUpdate(props.item.id, newValue);
      setIsEdit(false);
    };


    return (
      <form className="todoUpdateForm" onSubmit={submitHandler}>
        <input
          type="text"
          className="todoInput"
          onChange={changeHandler}
          value={newValue}
        />
        <button className="button" onClick={clickHandlerUpdateTodo}>
          Update
        </button>
      </form>
    );
  };


  const clickHandlerDeleteTodo = (e) => {
    props.onDelete(props.item.id)
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{props.item.title}</span>
         <button className="button" onClick={editHandler}>Edit</button>
        <button className="buttonDelete" onClick={clickHandlerDeleteTodo}>Delete</button>
      </div>
    );
  };

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;

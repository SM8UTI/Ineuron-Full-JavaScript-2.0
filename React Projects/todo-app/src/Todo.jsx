import React, { useState } from "react";
import Input from "./Input";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    time: null,
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      text: "",
      time: null,
    });
  };

  if (edit.id) {
    return <Input edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((elem, index) => (
    <div className="todo-row" key={index * 2}>
      <div key={elem.id}>
        <span className="text">{elem.text}</span>
      </div>
      <div className="todo-footer">
        <div>
          <span>{elem.time}</span>
        </div>
        <div className="icons">
          <FiEdit onClick={() => setEdit(elem.id, elem.text, elem.time)} />
          <AiFillDelete onClick={() => removeTodo(elem.id)} />
        </div>
      </div>
    </div>
  ));
};

export default Todo;

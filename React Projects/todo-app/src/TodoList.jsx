import React, { useEffect, useState } from "react";
import Input from "./Input";
import Todo from "./Todo";

const getLocalItems = () => {
  let data = localStorage.getItem("data");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const TodoList = () => {
  const [todos, setTodos] = useState(getLocalItems());

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    } else {
      const newTodos = [...todos, todo];
      setTodos(newTodos);
    }
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    } else {
      setTodos((prev) =>
        prev.map((item) => (todoId === item.id ? newValue : item))
      );
    }
  };

  const removeTodo = (id) => {
    const newArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(newArr);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify([...todos]));
  }, [todos]);

  return (
    <div className="todoList">
      <h1>What's your plan</h1>
      <Input onSubmit={addTodo} />
      <div className="container">
        <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>
    </div>
  );
};

export default TodoList;

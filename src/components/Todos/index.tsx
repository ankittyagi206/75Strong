import Todo from "./todo";
import "./index.css";
import { useState, useRef } from "react";

const Todos = () => {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef(null);
  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      const newTodo = {
        task: e.target.value,
        completed: false,
        id: Date.now(),
      };
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
      inputRef.current.value = "";
    }
  };
  console.log(todoList, "todoList");
  return (
    <>
      <input
        type="text"
        placeholder="Add Todos"
        ref={inputRef}
        onKeyPress={(e) => handleInputChange(e)}
      />
      <div className="todo-container">
        {todoList.map((e) => (
          <Todo {...e} />
        ))}
      </div>
    </>
  );
};

export default Todos;

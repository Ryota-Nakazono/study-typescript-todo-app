import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import { Form } from "./components/Form";
import TodoList from "./components/TodoList";

export type Todo = {
  inputValue: string;
  id: string;
  checked: boolean;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: uuid(),
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const updateTodo = (id: string, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleChecked = (id: string, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with TypeScript</h2>
        <Form
          createTodo={createTodo}
          inputTodo={inputTodo}
          inputValue={inputValue}
        />

        <ul className="todoList">
          {todos.map((todo) => (
            <TodoList
              todo={todo}
              updateTodo={updateTodo}
              handleChecked={handleChecked}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

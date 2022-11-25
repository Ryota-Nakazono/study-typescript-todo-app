import React, { useState } from 'react';
import uuid from 'react-uuid'
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: string;
    checked: boolean;
  }

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: uuid(),
      checked: false,
    }

    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  const updateTodo = (id: string, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const handleChecked = (id: string, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with TypeScript</h2>
        <form onSubmit={(e) => createTodo(e)}>
          <input type="text" className="inputText" value={inputValue} onChange={(e) => inputTodo(e)} />
          <input type="submit" className="submitButton" value="作成" />
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input 
                type="text" 
                className='inputText' 
                value={todo.inputValue} 
                onChange={(e) => updateTodo(todo.id, e.target.value)} 
                disabled={todo.checked}
              />
              <input 
                type="checkbox" 
                onChange={() => handleChecked(todo.id, todo.checked)}
              />
              <button onClick={() => deleteTodo(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

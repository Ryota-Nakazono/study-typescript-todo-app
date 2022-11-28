import React from "react";

type Props = {
  todo: any;
  updateTodo: (id: string, inputValue: string) => void;
  handleChecked: (id: string, checked: boolean) => void;
  deleteTodo: (id: string) => void;
};

const TodoList: React.FC<Props> = ({
  todo,
  updateTodo,
  handleChecked,
  deleteTodo,
}) => {
  return (
    <li key={todo.id}>
      <input
        type="text"
        className="inputText"
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
  );
};

export default TodoList;

import React from "react";

type Props = {
  createTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  inputTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};

export const Form: React.FC<Props> = (props) => {
  return (
    <form onSubmit={(e) => props.createTodo(e)}>
      <input
        type="text"
        className="inputText"
        value={props.inputValue}
        onChange={(e) => props.inputTodo(e)}
      />
      <input type="submit" className="submitButton" value="作成" />
    </form>
  );
};

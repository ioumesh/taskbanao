import React from "react";
import "./styles.css"
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  
  // method to change values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodo(value);
  };
  return (
    
      <form onSubmit={handleAdd}>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter a task"
          value={todo}
          onChange={handleChange}
        />
        <button className="submitBtn" type="submit">
          Create
        </button>
      </form>
  );
};

export default InputField;

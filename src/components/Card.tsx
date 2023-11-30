import React, { useState } from "react";
import "./styles.css";
import { Todo } from "../model";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDone } from "react-icons/md";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const Card: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // Edit
  const toggleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEditTodo(value);
  };

  return (
    <form className="cardContainer" onSubmit={(e) => handleEdit(e, todo.id)}>
      <div className="todoText">
        {edit ? (
          <input value={editTodo} onChange={handleChange} />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}
      </div>
      <div className="icons">
        <span onClick={toggleEdit}>
          <CiEdit />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
      </div>
    </form>
  );
};

export default Card;

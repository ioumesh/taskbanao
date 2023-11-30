import React from "react";
import "./styles.css";
import { Todo } from "../model";
import Card from "./Card";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="taskList">
      {todos &&
        todos.map((item) => {
          return (
            <Card key={item.id} todo={item} todos={todos} setTodos={setTodos} />
          );
        })}
    </div>
  );
};

export default TaskList;

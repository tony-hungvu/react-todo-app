import React from 'react';

interface TodoItem {
  text: string;
  isCompleted: boolean;
}

interface TodoProps {
  index: number;
  todo: TodoItem;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const Todo: React.FC<TodoProps> = ({ index, todo, completeTodo, removeTodo }) => {
  return (
    <div className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
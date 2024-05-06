import './App.css';

import React, { useState } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

interface TodoItem {
  text: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { text: 'Learn about React', isCompleted: false },
    { text: 'Meet friend for lunch', isCompleted: false },
    { text: 'Build really cool todo app', isCompleted: false },
  ]);

  const addTodo = (text: string): void => {
    const newTodos: TodoItem[] = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: TodoItem[] = [...todos];
    newTodos[index] = { ...newTodos[index], isCompleted: true };
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: TodoItem[] = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;

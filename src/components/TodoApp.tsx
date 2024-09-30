import { useState } from "react";
import { tasks } from "../data/tasks";

import { Task } from "../types/Task";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
// ----------------------------------------------

const TodoApp = () => {
  const [todos, setTodos] = useState<Task[]>(tasks);
  const [newTodo, setNewTodo] = useState("");

  //   Add New Task
  const addTask = () => {
    if (newTodo !== "") {
      const newId = crypto.randomUUID();
      const newTodoItem: Task = {
        id: newId,
        title: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold pb-4 border-b border-[#FFFFFF50] w-full text-center">
        تسک های شما
      </h1>
      <AddTask addTask={addTask} newTask={newTodo} setNewTask={setNewTodo} />
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TaskList
          tasks={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </ul>
    </div>
  );
};

export default TodoApp;

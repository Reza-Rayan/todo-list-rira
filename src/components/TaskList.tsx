import { Task } from "../types/Task";
import TaskCard from "./TaskCard";
// -----------------------------------------------

interface TaskListProps {
  tasks: Task[];
  removeTodo: any;
  toggleComplete: any;
}
const TaskList = ({ tasks, removeTodo, toggleComplete }: TaskListProps) => {
  return (
    <>
      {" "}
      {tasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          removeTodo={removeTodo}
          task={task}
          toggleComplete={toggleComplete}
        />
      ))}
    </>
  );
};

export default TaskList;

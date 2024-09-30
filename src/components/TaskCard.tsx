import { FaRegEye, FaTrash } from "react-icons/fa";
import { Task } from "../types/Task";

interface TaskCardProps {
  task: Task;
  removeTodo: any;
  toggleComplete: any;
}

const TaskCard = ({ task, removeTodo, toggleComplete }: TaskCardProps) => {
  return (
    <li
      key={task.id}
      className="bg-[#2563eb40] p-4 rounded-lg backdrop-blur-xl flex gap-2 justify-between"
    >
      <div className="flex items-center gap-2">
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.title}
        </span>
      </div>
      <div className="flex gap-2">
        <button onClick={() => removeTodo(task.id)}>
          <FaTrash className="text-red-500" />
        </button>
        <button onClick={() => toggleComplete(task.id)}>
          <FaRegEye className="text-slate-300" />
        </button>
      </div>
    </li>
  );
};

export default TaskCard;

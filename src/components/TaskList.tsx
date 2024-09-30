import { Task } from "../types/Task";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }: Task[]) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {tasks?.map((task: Task) => (
        <TaskCard key={task.id} title={task.title} date={task.date} />
      ))}
    </div>
  );
};

export default TaskList;

import { Task } from "../types/Task";
import TaskCard from "./TaskCard";

const tasks: Task[] = [
  {
    id: "1",
    title: "ناهار بخورم",
    completed: false,
    date: "1403/07/8",
  },
  {
    id: "2",
    title: " کد ریکت بزنم",
    completed: false,
    date: "1403/07/8",
  },
  {
    id: "3",
    title: "غذای پرنده بخرم",
    completed: false,
    date: "1403/07/8",
  },
  {
    id: "4",
    title: "درس بخونم",
    completed: false,
    date: "1403/07/8",
  },
  {
    id: "5",
    title: "به مادرم کمک کنم",
    completed: false,
    date: "1403/07/8",
  },
  {
    id: "6",
    title: "فیلم ببینم",
    completed: false,
    date: "1403/07/8",
  },
];

const TaskList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} title={task.title} date={task.date} />
      ))}
    </div>
  );
};

export default TaskList;

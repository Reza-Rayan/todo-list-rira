// Custom Components
import { useState } from "react";
import toast from "react-hot-toast";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { tasks as initialTasks } from "./data/tasks";
import { Task } from "./types/Task";
// -------------------------------------------

interface TitleProps {
  title: string;
}

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  // Get Last Task
  const lastTask = tasks.slice(-1)[0];

  // َAdd New Task Fn
  const onSubmit = (data: TitleProps) => {
    try {
      if (data.title === "") {
        toast.error("لطفا عنوان را وارد کنید");
      } else {
        const newTask: Task = {
          id: lastTask.id + 1,
          title: data.title,
          completed: false,
          date: "1403/07/20",
        };
        setTasks([...tasks, newTask]);
      }
    } catch (error) {
      console.log("ADD TASK ERROR", error);
    }
  };
  // End Here

  return (
    <div className="flex flex-col items-center justify-between lg:h-[90vh] lg:w-[180vh] bg-[#21212180] backdrop-blur-lg text-white rounded-2xl">
      <div className="container p-10">
        <h1 className="text-2xl font-bold pb-4 border-b border-[#FFFFFF50] w-full text-center">
          تسک های شما
        </h1>
        {/* Task Input */}
        <div className="my-4">
          <AddTask onSubmit={onSubmit} />
        </div>
        {/* Task List */}
        <div className="mt-20">
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default App;

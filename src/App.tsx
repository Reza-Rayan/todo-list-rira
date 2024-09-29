// Custom Components
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
// -------------------------------------------
const App = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:h-[90vh] lg:w-[200vh] bg-[#21212180] backdrop-blur-lg text-white rounded-2xl">
      <div className="container p-10">
        <h1 className="text-4xl font-bold pb-4 border-b border-[#FFFFFF50] w-full text-center">
          تسک های شما
        </h1>
        {/* Task Input */}
        <div className="my-4">
          <AddTask />
        </div>
        {/* Task List */}
        <div className="mt-20">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;

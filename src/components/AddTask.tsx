import { IoIosAdd } from "react-icons/io";

interface AddTaskProps {
  newTask: string;
  setNewTask: any;
  addTask: any;
}
const AddTask = ({ newTask, setNewTask, addTask }: AddTaskProps) => {
  return (
    <div className="flex justify-center my-6 gap-x-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="bg-[#21212170] lg:w-3/4 py-2 px-4 rounded-lg"
      />
      <button
        onClick={addTask}
        className="bg-indigo-600 px-2 rounded-lg border border-indigo-600 transition-all hover:bg-transparent"
      >
        <IoIosAdd fontSize={30} />
      </button>
    </div>
  );
};

export default AddTask;

import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:h-[90vh] lg:w-[180vh] bg-[#21212180] backdrop-blur-lg text-white rounded-2xl">
      <div className="container p-10">
        <TodoApp />
      </div>
    </div>
  );
};

export default App;

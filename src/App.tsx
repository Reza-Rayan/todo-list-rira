import Wall from "./components/Wall";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:h-[90vh] lg:w-[180vh] bg-[#21212180] backdrop-blur-lg text-white rounded-2xl">
      <div className="container p-10">
        <h1 className="text-2xl font-bold pb-4 border-b border-[#FFFFFF50] w-full text-center">
          نت های شما
        </h1>
        <Wall />
      </div>
    </div>
  );
};

export default App;

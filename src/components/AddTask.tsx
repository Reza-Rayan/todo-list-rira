import { useForm } from "react-hook-form";

// Icons
import { IoMdAdd } from "react-icons/io";

const AddTask = ({ onSubmit }: any) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-4 justify-center"
      >
        <input
          type="text"
          className="bg-[#21212180] p-4 text-white rounded-lg w-1/2"
          placeholder="عنوان تسک را وارد نمايید"
          id="title"
          {...register("title")}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-4 rounded-lg border border-indigo-600 transition-all hover:bg-transparent"
        >
          <IoMdAdd />
        </button>
      </form>
    </>
  );
};

export default AddTask;

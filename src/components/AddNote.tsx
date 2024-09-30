import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

interface AddNoteProps {
  newNote: string;
  setNewNote: any;
  addNote: (title: string, deadline?: Date) => void;
}

const AddNote = ({ newNote, setNewNote, addNote }: AddNoteProps) => {
  const [deadline, setDeadline] = useState<string>("");

  const handleAddNote = () => {
    const deadlineDate = deadline ? new Date(deadline) : undefined;
    addNote(newNote, deadlineDate);
    setNewNote("");
    setDeadline("");
  };

  return (
    <div className="flex w-full gap-4 justify-center my-6 gap-y-4">
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        className="bg-[#21212170] lg:w-1/2  py-2 px-4 rounded-lg"
        placeholder="نوت جدید را وارد نمایید"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="bg-[#21212170] lg:w-/4 py-2 px-4 rounded-lg"
        placeholder="مهلت انجام"
      />
      <button
        onClick={handleAddNote}
        className="bg-indigo-600 px-2 rounded-lg border border-indigo-600 transition-all hover:bg-transparent"
      >
        <IoIosAdd fontSize={30} />
      </button>
    </div>
  );
};

export default AddNote;

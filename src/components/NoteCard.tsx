import { FaTrash } from "react-icons/fa";
import { MdDone, MdDoneAll } from "react-icons/md";
import { Note } from "../types/Note";

interface NoteCardProps {
  note: Note;
  removeNote: any;
  toggleComplete: any;
  index: number; // Add index prop
  onDragStart: (index: number) => void; // Drag start handler
  onDrop: (draggedIndex: number, targetIndex: number) => void; // Drop handler
}

const NoteCard = ({
  note,
  removeNote,
  toggleComplete,
  index,
  onDragStart,
  onDrop,
}: NoteCardProps) => {
  return (
    <li
      draggable
      onDragStart={() => onDragStart(index)} // Handle drag start
      onDragOver={(e) => e.preventDefault()} // Allow drop
      onDrop={(e: any) => onDrop(e.dataTransfer.getData("text"), index)} // Handle drop
      className={`p-4 rounded-lg backdrop-blur-xl flex gap-2 justify-between transition-all hover:shadow-lg
          ${note.completed ? "bg-slate-700" : "bg-[#2563eb40]"}`}
    >
      <div className="flex items-center gap-2 w-full">
        <span
          style={{ textDecoration: note.completed ? "line-through" : "none" }}
        >
          {note.title}
        </span>
        <div className="text-sm text-gray-400">
          <p style={{ direction: "ltr" }}>
            تاریخ ایجاد: {note.createdAt.toLocaleDateString()}
          </p>
          {note.deadline && (
            <p>مهلت ددلاین: {note.deadline.toLocaleDateString()}</p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => removeNote(note.id)}>
          <FaTrash className="text-red-500" />
        </button>
        <button onClick={() => toggleComplete(note.id)}>
          {note.completed ? (
            <MdDoneAll className="text-slate-300" fontSize={23} />
          ) : (
            <MdDone className="text-slate-300" fontSize={23} />
          )}
        </button>
      </div>
    </li>
  );
};

export default NoteCard;

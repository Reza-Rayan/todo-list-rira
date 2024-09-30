import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdDone, MdDoneAll } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

import { Note } from "../types/Note";

interface NoteCardProps {
  note: Note;
  removeNote: any;
  toggleComplete: any;
  index: number;
  onDragStart: (index: number) => void;
  onDrop: (draggedIndex: number, targetIndex: number) => void;
  editNote: (id: string, title: string, deadline?: Date) => void;
}

const NoteCard = ({
  note,
  removeNote,
  toggleComplete,
  index,
  onDragStart,
  onDrop,
  editNote,
}: NoteCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);

  // Edit Node Fn
  const handleEdit = () => {
    editNote(note.id, editedTitle, note.deadline);
    setIsEditing(false);
  };
  // End Here
  return (
    <li
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e: any) => onDrop(e.dataTransfer.getData("text"), index)}
      className={`p-4 rounded-lg backdrop-blur-xl flex gap-2 justify-between transition-all hover:shadow-lg
        ${note.completed ? "bg-slate-700" : "bg-[#2563eb40]"}`}
    >
      <div className="flex items-center gap-2 w-full">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border p-1 rounded text-gray-600"
            onBlur={handleEdit} // Save on blur
          />
        ) : (
          <span
            style={{ textDecoration: note.completed ? "line-through" : "none" }}
          >
            {note.title}
          </span>
        )}
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
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>
            <CiEdit />
          </button> // Edit button
        ) : (
          <button onClick={handleEdit}>ذخیره</button>
        )}
      </div>
    </li>
  );
};

export default NoteCard;

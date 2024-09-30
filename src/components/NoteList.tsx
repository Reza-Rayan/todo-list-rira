import { Note } from "../types/Note";
import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: Note[];
  removeNote: any;
  toggleComplete: any;
  onDragStart: (index: number) => void;
  onDrop: (draggedIndex: number, targetIndex: number) => void;
  editNote: (id: string, title: string, deadline?: Date) => void;
}

const NoteList = ({
  notes,
  removeNote,
  toggleComplete,
  onDragStart,
  onDrop,
  editNote,
}: NoteListProps) => {
  return (
    <>
      {notes.map((note: Note, index: number) => (
        <NoteCard
          key={note.id}
          removeNote={removeNote}
          note={note}
          toggleComplete={toggleComplete}
          index={index}
          onDragStart={onDragStart}
          onDrop={onDrop}
          editNote={editNote}
        />
      ))}
    </>
  );
};

export default NoteList;

import { Note } from "../types/Note";
import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: Note[];
  removeNote: any;
  toggleComplete: any;
  onDragStart: (index: number) => void; // Add drag start handler
  onDrop: (draggedIndex: number, targetIndex: number) => void; // Add drop handler
}

const NoteList = ({
  notes,
  removeNote,
  toggleComplete,
  onDragStart,
  onDrop,
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
        />
      ))}
    </>
  );
};

export default NoteList;

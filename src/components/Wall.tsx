import { useState } from "react";
import { toast } from "react-hot-toast";
import { notes as initialNotes } from "../data/notes";

import { Note } from "../types/Note";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
// ----------------------------------------------

const Wall = () => {
  const [notes, setnotes] = useState<Note[]>(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  //   Add New Note Fn
  const addNote = (title: string, deadline?: Date) => {
    if (title === "") {
      toast.error("لطفا عنوان را وارد کنید");
      return; // Early return to prevent further execution
    }

    const newId = crypto.randomUUID();
    const newNoteItem: Note = {
      id: newId,
      title,
      completed: false,
      createdAt: new Date(), // Current date
      deadline, // DeadLine
    };

    // Check Validation for Deadline
    if (!newNoteItem.deadline) {
      toast.error("تاریخ ددلاین را مشخص کنید");
      return; // Early return to prevent adding the note
    }

    // Compare createdAt and deadline, and update completed if they match
    if (
      newNoteItem.createdAt.toDateString() ===
      newNoteItem.deadline.toDateString()
    ) {
      newNoteItem.completed = true;
    }

    setnotes([...notes, newNoteItem]);
    setNewNote("");
    console.log(notes);
  };

  //  Remove Note Fn
  const removeNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setnotes(updatedNotes);
  };
  // End Here

  // Change to Complete Fn
  const toggleComplete = (id: string) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, completed: !note.completed };
      }
      return note;
    });
    setnotes(updatedNotes);
  };

  const onDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const onDrop = (targetIndex: number) => {
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      const updatedNotes = [...notes];
      const [movedNote] = updatedNotes.splice(draggedIndex, 1); // Remove note from old position
      updatedNotes.splice(targetIndex, 0, movedNote); // Add note to new position
      setnotes(updatedNotes);
      setDraggedIndex(null); // Reset dragged index
    }
  };

  // Edit Note Fn
  const editNote = (id: string, title: string, deadline?: Date) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, title, deadline };
      }
      return note;
    });
    setnotes(updatedNotes);
  };
  // End here

  return (
    <div>
      <AddNote addNote={addNote} newNote={newNote} setNewNote={setNewNote} />
      <div className="my-10 grid grid-cols-1 items-center justify-center w-full">
        {notes?.length === 0 && (
          <h2 className="text-center text-xl">نوتی وجود ندارد</h2>
        )}
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <NoteList
          notes={notes}
          toggleComplete={toggleComplete}
          removeNote={removeNote}
          editNote={editNote} // Pass editNote prop
          onDragStart={onDragStart}
          onDrop={onDrop}
        />
      </ul>
    </div>
  );
};

export default Wall;

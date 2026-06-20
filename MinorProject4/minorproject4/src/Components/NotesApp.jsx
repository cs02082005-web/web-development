import { useState } from "react";

function NotesApp() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  const saveNote = () => {
    if (!title || !note) return;

    if (editId) {
      setNotes(
        notes.map((item) =>
          item.id === editId
            ? { ...item, title, note }
            : item
        )
      );
      setEditId(null);
    } else {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          title,
          note,
        },
      ]);
    }

    setTitle("");
    setNote("");
  };

  const editNote = (item) => {
    setTitle(item.title);
    setNote(item.note);
    setEditId(item.id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Notes App</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Write Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      <br />

      <button onClick={saveNote}>
        {editId ? "Update Note" : "Save Note"}
      </button>

      <div className="notes-container">
        {notes.map((item) => (
          <div className="note-card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.note}</p>

            <button
              onClick={() => editNote(item)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteNote(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesApp;
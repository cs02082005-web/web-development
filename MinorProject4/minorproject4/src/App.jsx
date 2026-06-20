import TodoApp from "./components/TodoApp";
import NotesApp from "./components/NotesApp";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Daily Task and Notes Tracker</h1>

      <div className="section">
        <TodoApp />
      </div>

      <div className="section">
        <NotesApp />
      </div>
    </div>
  );
}

export default App;
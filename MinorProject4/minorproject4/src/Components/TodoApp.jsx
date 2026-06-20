import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const completedCount = tasks.filter(
    (item) => item.completed
  ).length;

  return (
    <div>
      <h2>To-Do App</h2>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <p>Total: {tasks.length}</p>
      <p>Completed: {completedCount}</p>
      <p>Pending: {tasks.length - completedCount}</p>

      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleTask(id)}
            />

            <span
              style={{
                textDecoration: completed
                  ? "line-through"
                  : "none",
              }}
            >
              {text}
            </span>

            <button onClick={() => deleteTask(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
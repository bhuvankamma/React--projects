import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>To-Do List</h2>
      <div style={styles.card}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.inputField}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add Task
        </button>

        <ul style={styles.taskList}>
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              toggleTask={() => toggleTask(index)}
              deleteTask={() => deleteTask(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(to right, #4a00e0, #8e2de2)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    width: "100%",
  },
  inputField: {
    width: "90%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  addButton: {
    background: "#ff9800",
    color: "white",
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  taskList: {
    listStyle: "none",
    padding: "0",
    marginTop: "10px",
  },
};

export default TodoList;

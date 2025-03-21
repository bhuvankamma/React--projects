import React from "react";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li
      style={{
        ...styles.taskItem,
        background: task.completed ? "#ddd" : "#f5f5f5",
        textDecoration: task.completed ? "line-through" : "none",
        color: task.completed ? "gray" : "black",
      }}
    >
      <span onClick={toggleTask} style={styles.taskText}>
        {task.text}
      </span>
      <button onClick={deleteTask} style={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

// Inline Styles
const styles = {
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "8px",
    transition: "all 0.3s",
  },
  taskText: {
    flexGrow: 1,
    cursor: "pointer",
    padding: "5px",
  },
  deleteButton: {
    background: "#e74c3c",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default TodoItem;

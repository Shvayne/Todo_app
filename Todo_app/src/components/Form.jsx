import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ Todos, setTodos }) {
  //const [Todo, setTodo] = useState("");
  const [Todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (Todo.name.trim()) {
      setTodos([...Todos, Todo]);
      setTodo({ name: "", done: false });
    }
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={Todo.name}
          type="text"
          placeholder="Enter Todo item"
        ></input>
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

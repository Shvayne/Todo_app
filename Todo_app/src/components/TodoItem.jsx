import styles from "./TodoItem.module.css";

export default function TodoItem({ item, Todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete clicked for item ", item);
    setTodos(Todos.filter((Todo) => Todo !== item));
  }

  function handleClick(name) {
    const newArray = Todos.map((Todo) =>
      Todo.name === name ? { ...Todo, done: !Todo.done } : Todo
    );
    setTodos(newArray);
    console.log(Todos);
  }

  const className = item.done ? styles.completed : ""
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick={() => handleClick(item.name)} className={className}>{item.name}</span>
        <span>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}

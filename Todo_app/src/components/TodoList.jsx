import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
export default function TodoList({ Todos, setTodos }) {
  const sortedTodos = Todos.slice().sort((a,b) => Number(a.done) - Number(b.done))
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem item={item} key={item.name} Todos={Todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}

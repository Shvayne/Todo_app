import styles from "./Footer.module.css"
export default function Footer({ completedTodo, totalTodos}){
    return (
        <div className={styles.footer}>
            <span className={styles.footerSpan}>Completed: {completedTodo}</span>
            <span className={styles.footerSpan}>Total Todos: {totalTodos}</span>
        </div>
    )
}
import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./form";
import Footer from "./footer";
export default function Todo() {
  const [Todos, setTodos] = useState([]);
  const completedTodo = Todos.filter((Todo) => Todo.done).length
  const totalTodos = Todos.length
  return (
    <div>
      <Form Todos={Todos} setTodos={setTodos} />
      <TodoList Todos={Todos} setTodos={setTodos} />
      <Footer completedTodo={completedTodo} totalTodos={totalTodos}/>
    </div>
  );
}

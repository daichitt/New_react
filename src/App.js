import { useState, useRef } from "react";
import TodoList from './TodoList';
import uuid from 'react-uuid';

function App() {
  // const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
  const [todos, setTodos] = useState([
  ])

  // count Todo list
  const [count, setCount] = useState(2);

  // https://ja.reactjs.org/docs/hooks-reference.html#useref
  const TodoNameRef = useRef();

  const handleAddTodo = (e) => {
    setCount(count + 1);

    const name = TodoNameRef.current.value;
    if(name == "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id : uuid(), name: name, completed: false}];
    });
    TodoNameRef.current.value = null;
  }

  const handleClear = (e) => {
    const newTodos = todos.filter((todos) => !todos.completed);
    setTodos(newTodos);
  }
  const toggleTodo = (id) => {
    const newtodos = [...todos];
    const todo = newtodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newtodos);
  }

  return (
    <div>
      <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={TodoNameRef} />
      <button onClick={handleAddTodo}>Add Task</button>
      <button onClick={handleClear}>Delete Task</button>
      <div>Remaining tasks : {todos.filter((todos) => !todos.completed).length}</div>
      </>
    </div>
  );
}

export default App;
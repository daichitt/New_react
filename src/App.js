import { useState, useRef } from "react";
import TodoList from './TodoList';

function App() {
  // const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
  const [todos, setTodos] = useState([
    // {id : 1, name: "Todo1", completed: true},
    {id : 1, name: "Todo1", completed: true},
  ])

  // count Todo list
  const [count, setCount] = useState(2);

  // https://ja.reactjs.org/docs/hooks-reference.html#useref
  const TodoNameRef = useRef();

  const handleAddTodo = (e) => {
    setCount(count + 1);

    const name = TodoNameRef.current.value;
    const cureent = TodoNameRef.current;

    setTodos((prevTodos) => {
      return [...prevTodos, {id : count, name: name, completed: false}];
    });
    TodoNameRef.current.value = null;
  }

  return (
    <div>
      <>
      <TodoList todos={todos}/>
      <input type="text" ref={TodoNameRef} />
      <button onClick={handleAddTodo}>Add Task</button>
      <button>Delete Task</button>
      <div>Remaining tasks : </div>
      </>
    </div>
  );
}

export default App;
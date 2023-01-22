import { useState } from "react";
import TodoList from './TodoList';

function App() {
  const [todos, setTodo] = useState([
    {id : 1, name: "Todo1", completed: false},
  ])

  return (
    <div>
      <>
      <TodoList todos={todos}/>
      <input type="text" ></input>
      <button>Add Task</button>
      <button>Delete Task</button>
      <div>Remaining tasks : </div>
      </>
    </div>
  );
}

export default App;
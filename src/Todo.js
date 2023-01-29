import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  // console.log("Todoコンポーネント内のtodoは" , todo , "です")
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick} ></input>
      </label>
      {todo.name}
      </div>
  )
}

export default Todo
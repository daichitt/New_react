import React from 'react'

const Todo = ({ todo }) => {
  // console.log("Todoコンポーネント内のtodoは" , todo , "です")
  return (
    <div>
      <label>Task number #{todo.id}
        <input type="checkbox" checked={todo.completed} readOnly></input>
      </label>
      {todo.name}
      </div>
  )
}

export default Todo
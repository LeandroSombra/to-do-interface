import React from 'react'

interface ITodo {
  _id: string
  description: string
  done: boolean
  createdAt?: string
  updatedAt?: string
}

type TodoProps = {
  todo: ITodo
}

type ApiDataType = {
  message: string
  status: string
  todos: ITodo[]
  todo?: ITodo
}

type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void
    deleteTodo: (_id: string) => void
}

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.done ? `line-through` : ''
  return (
    <div className='Card'>
      <div className='Card--text'>
        {/* <h1 className={checkTodo}>{todo.name}</h1> */}
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className='Card--button'>
        {/* <button
          onClick={() => updateTodo(todo)}
          className={todo.done ? `hide-button` : 'Card--button__done'}
        >
          Complete
        </button> */}
        <button
          onClick={() => deleteTodo(todo._id)}
          className='Card--button__delete'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
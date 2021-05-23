import React from 'react'
import { FaTrash, FaCheckSquare, FaSquare } from 'react-icons/fa';
import * as S from './style'

interface ITodo {
  _id: string
  description: string
  done: boolean
  createdAt?: string
  updatedAt?: string
  concluido: boolean
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



const Todo = ({ todo, updateTodo, deleteTodo, restoreTodo }) => {
  //const checkTodo: string = todo.done ? `line-through` : ''
  return (
    <S.ItemTodo className={todo.done && 'concluido'}>
      <S.ItemDescription>{todo.description}</S.ItemDescription>
      <S.ItemButtons>
        {todo.done ? 
          ( <S.ItemButton onClick={() => restoreTodo(todo)}>
              <FaSquare />
              <span>Restaurar</span>
            </S.ItemButton>
          ) : (
              <S.ItemButton
                onClick={() => updateTodo(todo)}
              >
                <FaSquare />
                <span>Concluída</span>
              </S.ItemButton>
        )}
        <S.ItemButton
          onClick={() => deleteTodo(todo._id)}
          className='Card--button__delete'
        >
          <FaTrash />
          <span>Apagar</span>
        </S.ItemButton>
      </S.ItemButtons>
    </S.ItemTodo>
  )
}

export default Todo
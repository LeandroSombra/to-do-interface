import React, { useContext } from 'react'
import { FaTrash, FaCheckSquare, FaSquare } from 'react-icons/fa';
import * as S from './style'


import { TodoContext } from '../../contexts/TodoContext'




const Todo = ({ todo }) => {

  const todoContext = useContext(TodoContext)
  const { deleteTodo, doneTodo, restoreTodo }  = todoContext
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
                onClick={() => doneTodo(todo)}
              >
                <FaSquare />
                <span>Concluída</span>
              </S.ItemButton>
        )}
        <S.ItemButton onClick={() => deleteTodo(todo._id)}>
          <FaTrash />
          <span>Apagar</span>
        </S.ItemButton>
      </S.ItemButtons>
    </S.ItemTodo>
  )
}

export default Todo
import React, { useContext, useState } from 'react'
import { FaTrash, FaCheckSquare, FaSquare, FaUndoAlt, FaEdit } from 'react-icons/fa';
import * as S from './style'
import { TodoContext } from '../../contexts/TodoContext'
import { ITodo } from '../../types/api'

const Todo = ({ todo }) => {

  const todoContext = useContext(TodoContext)
  const { deleteTodo, doneTodo, restoreTodo, editTodo, fetchTodos }  = todoContext
  const [formData, setFormData] = useState<ITodo | {}>()
  const [showEdit, setShowEdit] = useState(false)
  
  const handleFormEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSaveTodoEdit = (e: React.FormEvent, formData: ITodo, todo) => {
     e.preventDefault()
     e.target[0].value = ''
      editTodo(formData, todo).then(fetchTodos, setFormData(''), setShowEdit(false))

  }

  return (
    <S.ItemTodo className={todo.done && 'concluido'}>
      {showEdit ? (
        <S.Form className='Form edit' onSubmit={(e) => handleSaveTodoEdit(e, formData, todo)}>
          <S.Input className="edit" aria-label={`Editar tarefa ${todo.description}`} placeholder={todo.description}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = `${todo.description}`} 
            onChange={handleFormEdit} type='text' id='description'
         />
        <S.Button aria-label="Salvar Tarefa" >Salvar</S.Button>
      </S.Form>
      ) : (
        <S.ItemDescription>{todo.description}</S.ItemDescription>
      ) }
     
      
      <S.ItemButtons>
        {todo.done ? 
          ( <S.ItemButton onClick={() => restoreTodo(todo)}>
              <FaCheckSquare />
              <span>Restaurar</span>
            </S.ItemButton>
          ) : (
              <S.ItemButton
                onClick={() => doneTodo(todo)}
              >
                <FaSquare />
                <span>Concluída</span>
              </S.ItemButton>
          )
        }
        <S.ItemButton onClick={() => setShowEdit(!showEdit)} className='edit'>
          {showEdit ? (
            <>
              <FaUndoAlt />
              <span>Cancelar</span>
            </>
          ) : (
            <>
              <FaEdit />
              <span>Editar</span>
            </>
          )}
        </S.ItemButton>
        <S.ItemButton onClick={() => deleteTodo(todo._id)}>
          <FaTrash />
          <span>Apagar</span>
        </S.ItemButton>
      </S.ItemButtons>
    </S.ItemTodo>
  )
}

export default Todo
import React, { useState, useContext } from 'react'
import * as S from './style'
import { ITodo } from '../../types/api'


import { TodoContext } from '../../contexts/TodoContext'

const AddTodo = () => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const todoContext = useContext(TodoContext)
  const { addTodo, fetchTodos }  = todoContext

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo) => {
     e.preventDefault()
     e.target[0].value = ''
     addTodo(formData).then(fetchTodos)
  }

  return (
    <S.Form className='Form' onSubmit={(e) => handleSaveTodo(e, formData)}>
      <S.Input aria-label="Criar nova tarefa" placeholder="Criar nova tarefa" 
        onFocus={(e) => e.target.placeholder = ''}
        onBlur={(e) => e.target.placeholder = 'Criar nova tarefa'} 
        onChange={handleForm} type='text' id='description' />
      <S.Button aria-label="Salvar Tarefa" disabled={formData === undefined ? true: false} >Salvar</S.Button>
    </S.Form>
  )
}

export default AddTodo
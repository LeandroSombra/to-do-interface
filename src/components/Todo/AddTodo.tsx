import React, { useState } from 'react'
import * as S from './style'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

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

const AddTodo = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <S.Form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <S.Input aria-label="Criar nova tarefa" placeholder="Criar nova tarefa" onChange={handleForm} type='text' id='description' />
      <S.Button aria-label="Salvar Tarefa" disabled={formData === undefined ? true: false} >Salvar</S.Button>
    </S.Form>
  )
}

export default AddTodo
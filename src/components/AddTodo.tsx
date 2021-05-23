import React, { useState } from 'react'

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
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        {/* <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div> */}
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Todo</button>
    </form>
  )
}

export default AddTodo
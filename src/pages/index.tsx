// import React from 'react'
// import axios from 'axios'
// import Head from 'next/head'
// import { InferGetStaticPropsType } from 'next'
// import { NextSeo } from 'next-seo'
// import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import TodoItem from 'components/Todo/TodoItem'
import AddTodo from 'components/Todo/AddTodo'
import { getTodos, addTodo, doneTodo, deleteTodo, restoreTodo } from 'API'

import * as S from '../components/Todo/style'

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

const Index = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = () => {
    getTodos()
    .then((response) => setTodos(response))
    .catch((err: Error) => console.log(err))
    
  }

 const handleSaveTodo = (e: React.FormEvent, formData: ITodo) => {
   e.preventDefault()
   addTodo(formData)
   .then(({ status, data }) => {
    if (status !== 201) {
      throw new Error('Error! Todo not saved')
    }
    fetchTodos()
  })
  .catch((err) => console.log(err))
}

  const handleDoneTodo = (todo: ITodo) => {
    doneTodo(todo)
    .then(({ status, data }) => {
        fetchTodos()
      })
      .catch((err) => console.log(err))
  }

  const handleRestoreTodo = (todo: ITodo) => {
    restoreTodo(todo)
    .then(({ status, data }) => {
        fetchTodos()
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteTodo = (_id: string) => {
    deleteTodo(_id)
    .then(({ status, data }) => {
        fetchTodos()
      })
      .catch((err) => console.log(err))
  }

  

  return (
    <S.Wrapper>
      <S.Content>
        <AddTodo saveTodo={handleSaveTodo} />
        {todos.map((todo: ITodo) => (
            <TodoItem
              key={todo._id}
              updateTodo={handleDoneTodo}
              restoreTodo={handleRestoreTodo}
              deleteTodo={handleDeleteTodo}
              todo={todo}
            />
          ))
        }
      </S.Content>
    </S.Wrapper>
  )
}

export default Index
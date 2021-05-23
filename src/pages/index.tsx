// import React from 'react'
// import axios from 'axios'
// import Head from 'next/head'
// import { InferGetStaticPropsType } from 'next'
// import { NextSeo } from 'next-seo'
// import { AppProps } from 'next/app'
// import { ThemeProvider } from 'styled-components'



// import { ToDos } from 'types/api'
// const API_URL: string = 'http://localhost:3003/api/todos'

// //const SectionTech = ({ title, techIcons }: SectionTechProps) => (


// const Index = ({ dados } : ToDos) => (
 
//     <div>
//       <p>Caregou</p>
//       {dados.map(item => (
//           <p key={item._id}>{item.description}</p>
//         )
//       )}
//       {console.log(dados)}
//     </div>
  
// )

// Index.getInitialProps =  async () => {
//   const response = await axios.get(API_URL)

//   return { dados: response.data }
// }



// export default Index


import React, { useEffect, useState } from 'react'
import TodoItem from 'components/TodoItem'
import AddTodo from 'components/AddTodo'
import { getTodos, addTodo, updateTodo, deleteTodo } from 'API'

interface ITodo {
  _id: string
  description: string
  status: boolean
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

//const Index = ({ dados } : ToDos) =>

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

  const handleUpdateTodo = (todo: ITodo) => {
    updateTodo(todo)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated')
        }
        setTodos(data.todos)
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
    <main>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
          <TodoItem
            key={todo._id}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))
      }
    </main>
  )
}

export default Index
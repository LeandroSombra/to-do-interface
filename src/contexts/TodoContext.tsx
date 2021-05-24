import { ITodo } from '../types/api'

import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
const baseUrl: string = 'http://localhost:3003/api/todos/'

const TodoContext = React.createContext()

const TodoProvider = (props) => {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
 
  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}?sort=-createdAt`
      ).then((response) => {
         setTodos(response.data), 
         setLoading(true)
     })
    } catch (error) {
      throw new Error(error)
    }
  }

   const deleteTodo = async (_id: string) => {
    try {
      const deletedTodo = await axios.delete(
        `${baseUrl}${_id}`
      ).then(
        fetchTodos
      )
      return deletedTodo
    } catch (error) {
      throw new Error(error)
    }
  }

  const addTodo = async (formData) => {
    try {
      const todo: Omit<ITodo, '_id'> = {
        description: formData.description,
        done: false,
      }
      const saveTodo = await axios.post(
        baseUrl,
        todo
      )
      return saveTodo
    } catch (error) {
      throw new Error(error)
    }
  }

  const doneTodo = async (todo: ITodo) => {
    try {
      const todoUpdate = {
        done: true,
      }
      const updatedTodo = await axios.put(
        `${baseUrl}${todo._id}`,
        todoUpdate
      ).then(
        fetchTodos
      )
      return updatedTodo
    } catch (error) {
      throw new Error(error)
    }
  }

  const restoreTodo = async (todo: ITodo) => {
    try {
      const todoUpdate = {
        done: false,
      }
      const updatedTodo = await axios.put(
        `${baseUrl}${todo._id}`,
        todoUpdate
      ).then(
        fetchTodos
      )
      return updatedTodo
    } catch (error) {
      throw new Error(error)
    }
  }
  

  useEffect(() => {
    fetchTodos()

  }, [])

  return (
    <TodoContext.Provider value={{
      loading,
      todos,
      fetchTodos,
      deleteTodo,
      addTodo,
      doneTodo,
      restoreTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}
const TodoConsumer = TodoContext.Consumer
export { TodoProvider, TodoConsumer, TodoContext }


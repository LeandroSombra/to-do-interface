import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:3003'

interface ITodo {
    _id: string
    description: string
    done: boolean
    createdAt?: string
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


export const getTodos = async () => {
  try {
    const response = await axios.get(
      baseUrl + '/api/todos'
    )
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export const addTodo = async (formData) => {
  try {
    const todo: Omit<ITodo, '_id'> = {
      description: formData.description,
      done: false,
    }
    const saveTodo = await axios.post(
      baseUrl + '/api/todos',
      todo
    )
    return saveTodo
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteTodo = async (_id: string) => {
    try {
      const deletedTodo = await axios.delete(
        `${baseUrl}/api/todos/${_id}`
      )
      return deletedTodo
    } catch (error) {
      throw new Error(error)
    }
  }

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, 'done'> = {
      done: true,
    }
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    )
    return updatedTodo
  } catch (error) {
    throw new Error(error)
  }
}


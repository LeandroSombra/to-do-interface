import React, { useEffect, useState, useContext } from 'react'
import TodoItem from 'components/Todo/TodoItem'
import AddTodo from 'components/Todo/AddTodo'

import { ITodo } from '../types/api'


import * as S from '../components/Todo/style'
import { TodoContext } from '../contexts/TodoContext'


const Index = () => {
  const todoContext = useContext(TodoContext)
  const { loading, todos }  = todoContext

  return (
      <S.Wrapper>
        <S.Content>
          <AddTodo /> 
          {loading && (
            todos.map((todo: ITodo) => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                />
              ))
          )}
        </S.Content>
      </S.Wrapper>
  )
}

export default Index
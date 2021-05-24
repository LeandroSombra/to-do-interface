import React, { useEffect, useState, useContext } from 'react'
import TodoItem from 'components/Todo/TodoItem'
import AddTodo from 'components/Todo/AddTodo'

import { ITodo } from '../types/api'


import * as S from '../components/Todo/style'
import { TodoContext } from '../contexts/TodoContext'


const Index = () => {
  const todoContext = useContext(TodoContext)
  const { loading, todos }  = todoContext
  const d = new Date();

  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  
  const [date, setDate] = useState({
    dayNumber: 0,
    month: '',
    day: '',
    year: 0
  })

  useEffect(() => {
    setDate({
      dayNumber: d.getDate(),
      month: months[d.getMonth()],
      day: days[d.getDay()],
      year: d.getFullYear()
    })

  }, [])
 
  return (
      <S.Wrapper>
        <S.DateHeader>
          <S.DateRight>
            <h1>{date.dayNumber}</h1>
            <div>
              <p>{date.month}</p>
              <p>{date.year}</p>
            </div>
          </S.DateRight>
          <h3>{date.day}</h3>
        </S.DateHeader>
        <S.Content className="intro">
          {todos.length > 0 ? (
            <p>Você tem <b>{todos.length}</b> novas tarefas.</p>
          ) : (<p>Seja bem-vindo! Você não tem novas tarefas.</p>)}
          
        </S.Content>
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
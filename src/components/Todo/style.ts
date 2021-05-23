import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 750px;
  padding: 0 20px;
  width: 100%;
`


export const Content = styled.div`
    border: solid 1px #FFFFFF;

`

export const Form = styled.form`
  display: flex;
  padding: 20px;
`

export const Input = styled.input`
  background: #FFFCFC;
  border: 1px solid #F9BC3C;
  box-shadow: inset 3px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #A59999;
  font-size: 32px;
  flex: 1;
  margin: 0 8px 0 0;
  padding: 8px;
  outline: none;
`

export const Button = styled.button`
  background: #5A955D;
  border-radius: 10px;
  font-size: 18px;
  padding: 0 10px;
`

export const ItemTodo = styled.div`
  align-items: center;
  border-top: solid 1px #FFFFFF;
  display: flex;

  &.concluido {
    opacity: 0.5;
  }
  
`

export const ItemDescription = styled.h2`
  flex: 1;
  padding: 0 20px;
`

export const ItemButtons = styled.div`
  display: flex;
`

export const ItemButton = styled.button`
  align-items: center;
  background-color: #FFFFFF;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 1px;
  vertical-align: baseline;

  /* + button {
    margin: 0 0 0 1px;
  } */
`
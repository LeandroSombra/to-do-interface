import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 750px;
  padding: 0 20px;
  width: 100%;
`

export const Content = styled.div`
    ${({ theme }) => css`
      border: solid 1px ${theme.colors.white};
  `}

  &.intro {
    border-bottom: 0;
    padding: 6px 20px;
  }
`

export const Form = styled.form`
  display: flex;
  padding: 20px;
`

export const Input = styled.input`
  ${({ theme }) => css`
      background-color:${theme.colors.white};
      color:${theme.colors.gray};
  `}
  box-shadow: inset 3px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
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
  display: flex;
  ${({ theme }) => css`
      border-top: solid 1px ${theme.colors.white};
  `}

  &.concluido {
    opacity: 0.5;
  }
  
`


export const DateHeader = styled.div`
  align-items: baseline;
  display: flex;
  padding: 0 0 20px;
`

export const DateRight = styled.div`
  align-items: center;
  display: flex;
  flex: 1;

  h1 {
    font-size: 55px;
    line-height: 42px;
    padding: 0 8px 0 0;
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
  ${({ theme }) => css`
      background-color:${theme.colors.white};
      color:${theme.colors.gray};
  `}
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 1px;
  vertical-align: baseline;

`
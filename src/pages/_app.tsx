import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'
import { TodoProvider } from '../contexts/TodoContext'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <GlobalStyle />
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </ThemeProvider>
  )
}

export default App

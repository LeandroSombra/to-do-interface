import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-v9-latin-regular.woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
      min-height: 100%;
    -webkit-text-size-adjust: 100%;
    }

    body {
      background: linear-gradient(180deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
      min-height: 100%;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      -webkit-text-size-adjust: 100%;
    }
  `}
`

export default GlobalStyle

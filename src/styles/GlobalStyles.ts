import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}

body{
  background-color: ${({ theme }) => theme.color.bgPage};
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    max-width: 80%;
  }
}
`
export default GlobalStyle

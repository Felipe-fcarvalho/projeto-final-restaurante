import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Menu from './container/Menu'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <div className="container">
          <Menu />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App

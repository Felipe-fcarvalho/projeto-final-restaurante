import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import AppRoutes from './routes/routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App

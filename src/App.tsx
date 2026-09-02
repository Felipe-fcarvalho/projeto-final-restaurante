import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

import AppRoutes from './routes/routes'

import store from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
        <Cart />
      </ThemeProvider>
    </Provider>
  )
}

export default App

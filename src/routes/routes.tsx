import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Perfil from '../pages/Profile'
import Home from '../pages/Home'

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </Routes>
  </BrowserRouter>
)

export default Rotas

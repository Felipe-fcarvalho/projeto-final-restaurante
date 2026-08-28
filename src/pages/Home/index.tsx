import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardRestaurante from '../../components/CardRestaurante'
import { getRestaurantes } from '../../services/restaurantesApi'
import type { Restaurante } from '../../model/Restaurante'
import * as S from './styles'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    getRestaurantes().then(setRestaurantes)
  }, [])

  return (
    <>
      <Header />
      <S.Lista>
        <div className="container">
          {restaurantes.map((restaurante) => (
            <CardRestaurante key={restaurante.id} {...restaurante} />
          ))}
        </div>
      </S.Lista>
      <Footer />
    </>
  )
}

export default Home

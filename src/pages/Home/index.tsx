import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardRestaurante from '../../components/CardRestaurante'
import { useGetRestaurantsQuery } from '../../services/restaurantesApi'
import * as S from './styles'

const Home = () => {
  const { data: restaurantes, isLoading, isError } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      <S.Lista>
        <div className="container">
          {isLoading && <S.Message>Carregando restaurantes...</S.Message>}
          {isError && (
            <S.Message>Não foi possível carregar os restaurantes.</S.Message>
          )}
          {restaurantes?.map((restaurante) => (
            <CardRestaurante key={restaurante.id} {...restaurante} />
          ))}
        </div>
      </S.Lista>
      <Footer />
    </>
  )
}

export default Home

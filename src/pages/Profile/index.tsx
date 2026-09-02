import { useParams } from 'react-router-dom'

import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import Menu from '../../container/Menu'
import * as S from './styles'

import { useGetRestaurantsQuery } from '../../services/restaurantesApi'

const capitalizar = (texto: string) =>
  texto.charAt(0).toUpperCase() + texto.slice(1)

const Profile = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()
  const restaurante = restaurantes?.find((item) => item.id === Number(id))

  return (
    <>
      <HeaderPerfil />
      <S.Hero $imagem={restaurante?.capa}>
        <div className="container">
          {isLoading && <S.Message>Carregando...</S.Message>}
          {restaurante && (
            <>
              <span>{capitalizar(restaurante.tipo)}</span>
              <h2>{restaurante.titulo}</h2>
            </>
          )}
        </div>
      </S.Hero>
      {restaurante && <Menu produtos={restaurante.cardapio} />}
      <Footer />
    </>
  )
}

export default Profile

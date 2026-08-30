import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import Menu from '../../container/Menu'
import { getRestaurantePorId } from '../../services/restaurantesApi'
import type { Restaurante } from '../../model/Restaurante'
import * as S from './styles'

const capitalizar = (texto: string) =>
  texto.charAt(0).toUpperCase() + texto.slice(1)

const Profile = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | undefined>()

  useEffect(() => {
    if (id) {
      getRestaurantePorId(Number(id)).then(setRestaurante)
    }
  }, [id])

  return (
    <>
      <HeaderPerfil />
      <S.Hero $imagem={restaurante?.capa}>
        <div className="container">
          {restaurante ? (
            <>
              <span>{capitalizar(restaurante.tipo)}</span>
              <h2>{restaurante.titulo}</h2>
            </>
          ) : (
            <h2>Carregando...</h2>
          )}
        </div>
      </S.Hero>
      {restaurante && <Menu produtos={restaurante.cardapio} />}
      <Footer />
    </>
  )
}

export default Profile

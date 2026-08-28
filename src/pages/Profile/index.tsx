import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Menu from '../../container/Menu'
import { getRestaurantePorId } from '../../services/restaurantesApi'
import type { Restaurante } from '../../model/Restaurante'
import * as S from './styles'

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
      <S.Hero $imagem={restaurante?.imagem}>
        <div className="container">
          {restaurante ? (
            <>
              <span>{restaurante.categoria}</span>
              <h2>{restaurante.titulo}</h2>
            </>
          ) : (
            <h2>Carregando...</h2>
          )}
        </div>
      </S.Hero>
      {restaurante && <Menu restauranteId={restaurante.id} />}
      <Footer />
    </>
  )
}

export default Profile

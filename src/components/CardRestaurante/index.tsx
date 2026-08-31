import { Link } from 'react-router-dom'
import type { Restaurante } from '../../model/Restaurante'
import * as S from './styles'

const capitalizar = (texto: string) =>
  texto.charAt(0).toUpperCase() + texto.slice(1)

const CardRestaurante = ({
  id,
  titulo,
  descricao,
  capa,
  avaliacao,
  tipo,
  destacado,
}: Restaurante) => (
  <S.Card>
    <S.Image src={capa} alt={titulo} />
    <S.InfoContainer>
      <S.CardTag>
        {destacado && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{capitalizar(tipo)}</S.Tag>
      </S.CardTag>
      <S.Top>
        <h3>{titulo}</h3>
        <span>
          {avaliacao} <img src="./src/assets/icons/star.svg" alt="estrela" />
        </span>
      </S.Top>
      <p>{descricao}</p>
      <Link to={`/perfil/${id}`}>Saiba mais</Link>
    </S.InfoContainer>
  </S.Card>
)

export default CardRestaurante

import { Link } from 'react-router-dom'
import type { Restaurante } from '../../model/Restaurante'
import * as S from './styles'

const CardRestaurante = ({
  id,
  titulo,
  descricao,
  imagem,
  nota,
  infos,
}: Restaurante) => (
  <S.Card>
    <S.Image src={imagem} alt={titulo} />
    <S.InfoContainer>
      <S.CardTag>
        {infos.map((info) => (
          <S.Tag key={info}>{info}</S.Tag>
        ))}
      </S.CardTag>
      <S.Top>
        <h3>{titulo}</h3>
        <S.Rate>
          <span>{nota}</span>
          <img src="/src/assets/icons/star.svg" alt="estrela" />
        </S.Rate>
      </S.Top>
      <p>{descricao}</p>
      <Link to={`/perfil/${id}`}>Saiba mais</Link>
    </S.InfoContainer>
  </S.Card>
)

export default CardRestaurante

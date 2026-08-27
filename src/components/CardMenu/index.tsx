import * as S from './styled'
import starIcon from '../../assets/icons/star.svg'

type Props = {
  image: string
  title: string
  description: string
  rate: number
  infos: string[]
}

const CardMenu = ({ image, title, description, rate, infos }: Props) => (
  <S.Card>
    <S.ImageContainer>
      <S.Image src={image} alt={title} />
      <S.BadgeList>
        {infos.map((info) => (
          <S.Badge key={info}>{info}</S.Badge>
        ))}
      </S.BadgeList>
    </S.ImageContainer>

    <S.Content>
      <S.Header>
        <S.Title>{title}</S.Title>

        <S.RateWrapper>
          <S.Rate>{rate}</S.Rate>
          <S.Star src={starIcon} alt="ícone de estrela" />
        </S.RateWrapper>
      </S.Header>

      <S.Description>{description}</S.Description>

      <S.Button>Saiba mais</S.Button>
    </S.Content>
  </S.Card>
)

export default CardMenu

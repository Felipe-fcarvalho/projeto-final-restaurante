import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Header = () => (
  <>
    <S.Header>
      <S.Container>
        <S.Logo src={logo} alt="Efood" />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.Container>
    </S.Header>
  </>
)

export default Header

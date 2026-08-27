import logo from '../../assets/images/logo.svg'
import bgPattern from '../../assets/images/bg-pattern.png'
import * as S from './styles'

const Header = () => (
  <>
    <S.Header style={{ backgroundImage: `url(${bgPattern})` }}>
      <S.Container>
        <S.Logo src={logo} alt="logo" />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.Container>
    </S.Header>
  </>
)

export default Header

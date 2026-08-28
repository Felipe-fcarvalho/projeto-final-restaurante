import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const HeaderPerfil = () => (
  <>
    <S.Header>
      <S.Container>
        <S.Title>Restaurantes</S.Title>
        <S.Logo src={logo} alt="Efood" />
        <S.Title>0 produto(s) no carrinho</S.Title>
      </S.Container>
    </S.Header>
  </>
)

export default HeaderPerfil

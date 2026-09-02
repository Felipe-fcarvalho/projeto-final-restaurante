import { open } from '../../store/reducers/cart'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import * as S from './styles'

const Header = () => {
  const dispatch = useAppDispatch()
  const quantidade = useAppSelector((state) => state.cart.items.length)
  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Header>
      <S.Container className="container">
        <S.Nav to="/">Restaurantes</S.Nav>
        <S.Logo to="/" />
        <S.Carrinho onClick={openCart}>
          {quantidade} produto(s) no carrinho
        </S.Carrinho>
      </S.Container>
    </S.Header>
  )
}

export default Header

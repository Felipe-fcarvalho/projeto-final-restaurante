import * as S from './styles'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { close, remove } from '../../store/reducers/cart'

const formataPreco = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)

const Cart = () => {
  const { isOpen, items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const valorTotal = items.reduce((total, item) => total + item.preco, 0)

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item, indice) => (
            <S.CartItem key={`${item.id}-${indice}`}>
              <img src={item.foto} alt="pizza" />
              <div>
                <h3>
                  {item.nome}
                  <span>{formataPreco(item.preco)}</span>
                </h3>
              </div>
              <button type="button" onClick={() => dispatch(remove(indice))} />
            </S.CartItem>
          ))}
        </ul>
        <S.PriceContainer>
          <S.Price>Valor Total</S.Price>
          <S.Price>{formataPreco(valorTotal)}</S.Price>
        </S.PriceContainer>
        <S.Button>Continuar com a entrega</S.Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

import { useState } from 'react'
import type { Produto } from '../../model/Produto'
import { useAppDispatch } from '../../store/hooks'
import { add, open } from '../../store/reducers/cart'
import ModalProduto from './Modal'
import * as S from './styles'

type Props = {
  produtos: Produto[]
}

const Menu = ({ produtos }: Props) => {
  const dispatch = useAppDispatch()
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null,
  )

  return (
    <S.Section>
      <div className="container">
        <S.List>
          {produtos.map((item) => (
            <S.Card key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <button onClick={() => setProdutoSelecionado(item)}>
                Adicionar ao carrinho
              </button>
            </S.Card>
          ))}
        </S.List>
      </div>

      {produtoSelecionado && (
        <ModalProduto
          produto={produtoSelecionado}
          aoFechar={() => setProdutoSelecionado(null)}
          aoAdicionar={() => {
            dispatch(add(produtoSelecionado))
            dispatch(open())
            setProdutoSelecionado(null)
          }}
        />
      )}
    </S.Section>
  )
}

export default Menu

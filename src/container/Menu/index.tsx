import { useState } from 'react'
import type { Produto } from '../../model/Produto'
import ModalProduto from './Modal'
import * as S from './styles'

type Props = {
  produtos: Produto[]
}

const Menu = ({ produtos }: Props) => {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null,
  )

  return (
    <S.Section>
      <div className="container">
        <S.List>
          {produtos.map((item) => (
            <S.Card key={item.id} onClick={() => setProdutoSelecionado(item)}>
              <img src={item.foto} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <button
                onClick={(evento) => {
                  evento.stopPropagation()
                }}
              >
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
        />
      )}
    </S.Section>
  )
}

export default Menu

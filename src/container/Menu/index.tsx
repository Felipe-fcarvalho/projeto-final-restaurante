import { useEffect, useState } from 'react'
import { getProdutosPorRestaurante } from '../../services/produtosApi'
import type { Produto } from '../../model/Produto'
import * as S from './styles'

type Props = {
  restauranteId: number
}

const Menu = ({ restauranteId }: Props) => {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    getProdutosPorRestaurante(restauranteId).then(setProdutos)
  }, [restauranteId])

  return (
    <S.Section>
      <div className="container">
        <S.List>
          {produtos.map((item) => (
            <S.Card key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <button>Adicionar ao carrinho</button>
            </S.Card>
          ))}
        </S.List>
      </div>
    </S.Section>
  )
}

export default Menu

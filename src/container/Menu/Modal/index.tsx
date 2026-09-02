import type { Produto } from '../../../model/Produto'
import * as S from './styles'
import fechar from '../../../assets/icons/fechar.png'

type Props = {
  produto: Produto
  aoFechar: () => void
  aoAdicionar: () => void
}

const formatarPreco = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)

const ModalProduto = ({ produto, aoFechar, aoAdicionar }: Props) => {
  return (
    <S.Overlay onClick={aoFechar}>
      <S.Modal onClick={(evento) => evento.stopPropagation()}>
        <S.Fechar onClick={aoFechar} aria-label="Fechar">
          <img src={fechar} alt="ícone fechar" />
        </S.Fechar>
        <S.Foto src={produto.foto} alt={produto.nome} />
        <S.Conteudo>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <span>Serve: {produto.porcao}</span>
          <button onClick={aoAdicionar}>
            Adicionar ao carrinho - {formatarPreco(produto.preco)}
          </button>
        </S.Conteudo>
      </S.Modal>
    </S.Overlay>
  )
}

export default ModalProduto

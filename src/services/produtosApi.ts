import produtos from '../mocks/produtos'
import type { Produto } from '../model/Produto'

export async function getProdutosPorRestaurante(
  restauranteId: number,
): Promise<Produto[]> {
  return produtos.filter((produto) => produto.restauranteId === restauranteId)
}

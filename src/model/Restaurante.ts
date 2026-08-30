import type { Produto } from './Produto'

export type Restaurante = {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  avaliacao: number
  destacado: boolean
  cardapio: Produto[]
}

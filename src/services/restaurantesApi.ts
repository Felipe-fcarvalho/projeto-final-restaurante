import restaurantes from '../mocks/restaurantes'
import type { Restaurante } from '../model/Restaurante'

export async function getRestaurantes(): Promise<Restaurante[]> {
  return restaurantes
}

export async function getRestaurantePorId(
  id: number,
): Promise<Restaurante | undefined> {
  return restaurantes.find((restaurante) => restaurante.id === id)
}

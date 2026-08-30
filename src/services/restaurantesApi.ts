import type { Restaurante } from '../model/Restaurante'

const BASE_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export async function getRestaurantes(): Promise<Restaurante[]> {
  const resposta = await fetch(BASE_URL)

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os restaurantes')
  }

  return resposta.json()
}

export async function getRestaurantePorId(
  id: number,
): Promise<Restaurante | undefined> {
  const restaurantes = await getRestaurantes()
  return restaurantes.find((restaurante) => restaurante.id === id)
}

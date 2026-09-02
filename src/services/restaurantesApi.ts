import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurante } from '../model/Restaurante'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
    }),
  }),
})

export const { useGetRestaurantsQuery } = api

export default api

import { instance } from '../instance'

export const getOrders = (token: string) =>
   instance.get<GetOrdersResponse>(`/cinema/orders`, {
      headers: {
         Authorization: `Bearer ${token}`
      }
   })

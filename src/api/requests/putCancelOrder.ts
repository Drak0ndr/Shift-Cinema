import { instance } from '../instance'

export const putCancelOrder = (orderId: string, token: string) =>
   instance.put<StandartResponse>(
      `/cinema/orders/cancel`,
      { orderId },
      {
         headers: {
            Authorization: `Bearer ${token}`
         }
      }
   )

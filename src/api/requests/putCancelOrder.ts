import { instance } from '../instance'

interface PutCancelOrderProps {
   orderId: string
   token: string
}

type putCancelOrderRequestConfig = RequestConfig<PutCancelOrderProps>

export const putCancelOrder = ({params, config}:putCancelOrderRequestConfig) =>
   instance.put<StandartResponse>(
      `/cinema/orders/cancel`,
      { orderId: params.orderId },
      {
         headers: {
            Authorization: `Bearer ${params.token}`
         },
         ...config
      }
   )

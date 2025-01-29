import { instance } from '../instance'

export interface GetOrdersProps {
   token: string
}

type getOrdersRequestConfig = RequestConfig<GetOrdersProps>

export const getOrders = ({ params, config }: getOrdersRequestConfig) =>
   instance.get<GetOrdersResponse>(`/cinema/orders`, {
      headers: {
         Authorization: `Bearer ${params.token}`
      },
      ...config
   })

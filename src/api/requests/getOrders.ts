import { instance } from '../instance'

export interface GetOrdersParams {
   token: string
}

type getOrdersRequestConfig = RequestConfig<GetOrdersParams>

export const getOrders = ({ params, config }: getOrdersRequestConfig) =>
   instance.get<GetOrdersResponse>(`/cinema/orders`, {
      headers: {
         Authorization: `Bearer ${params.token}`
      },
      ...config
   })

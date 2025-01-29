import { useQuery } from '@tanstack/react-query'

import { getOrders } from '../requests/getOrders'

export const useGetOrdersQuery = (token: string) =>
   useQuery({
      queryKey: ['getOrders'],
      queryFn: () => getOrders(token),
   })

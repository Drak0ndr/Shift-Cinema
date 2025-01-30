import { useQuery } from '@tanstack/react-query'

import type { GetOrdersParams } from '../requests/getOrders'
import { getOrders } from '../requests/getOrders'

export const useGetOrdersQuery = (params: GetOrdersParams, settings?: QuerySettings<typeof getOrders>) =>
   useQuery({
      queryKey: ['getOrders'],
      queryFn: () => getOrders({ params, config: settings?.config }),
      ...settings?.options
   })

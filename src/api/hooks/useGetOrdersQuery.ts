import { useQuery } from '@tanstack/react-query'

import type { GetOrdersProps } from '../requests/getOrders'
import { getOrders } from '../requests/getOrders'

export const useGetOrdersQuery = (params: GetOrdersProps, settings?: QuerySettings<typeof getOrders>) =>
   useQuery({
      queryKey: ['getOrders'],
      queryFn: () => getOrders({ params, config: settings?.config }),
      ...settings?.options
   })

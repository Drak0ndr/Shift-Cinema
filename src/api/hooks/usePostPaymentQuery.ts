import { useQuery } from '@tanstack/react-query'

import { postPayment } from '../requests/postPayment'

export const usePostPaymentQuery = (
   params: PostPaymentRequest,
   settings?: QuerySettings<typeof postPayment>
) =>
   useQuery({
      queryKey: ['postPayment'],
      queryFn: () => postPayment({ params, config: settings?.config }),
      refetchOnWindowFocus: false,
      ...settings?.options
   })

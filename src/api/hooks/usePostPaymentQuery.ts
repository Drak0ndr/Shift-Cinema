import { useQuery } from '@tanstack/react-query'

import { postPayment } from '../requests/postPayment'

export const usePostPaymentQuery = (data: PostPaymentRequest) =>
   useQuery({
      queryKey: ['postPayment'],
      queryFn: () => postPayment(data),
      refetchOnWindowFocus: false
   })

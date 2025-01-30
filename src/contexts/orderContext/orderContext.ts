import { createContext } from 'react'

import { PostPaymentParams } from '@/api/requests/postPayment'

interface OrderContext {
   details: PostPaymentParams
   setDetails: (details: PostPaymentParams) => void
   setSeance: (date: string, time: string) => void
   setTickets: (matrix: { [key: number]: number[] }) => void
   stage: number
   setStage: (stage: number) => void
}

export const orderContext = createContext<OrderContext>({
   details: {
      filmId: '',
      person: { firstname: '', lastname: '', middlename: '', phone: '' },
      debitCard: { pan: '', expireDate: '', cvv: '' },
      seance: { date: '', time: '' },
      tickets: []
   },
   setDetails: () => {},
   setSeance: () => {},
   setTickets: () => {},
   stage: 0,
   setStage: () => {}
})

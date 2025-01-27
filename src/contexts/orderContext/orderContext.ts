import { createContext } from 'react'

interface OrderContext {
   details: postPaymentRequest
   setDetails: (details: postPaymentRequest) => void
   setSeance: (date: string, time: string) => void
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
   stage: 0,
   setStage: () => {}
})

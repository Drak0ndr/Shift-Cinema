import { createContext } from 'react'

interface OrderContext {
   details: postPaymentRequest | undefined
   setDetails: (details: postPaymentRequest) => void,
   setSeance: (date: string, time: string) => void
}

export const orderContext = createContext<OrderContext>({
   details: undefined,
   setDetails: () => {},
   setSeance: () => {}
})

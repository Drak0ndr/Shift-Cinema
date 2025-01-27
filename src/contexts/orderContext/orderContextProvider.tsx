import { ReactNode, useRef, useState } from 'react'
import { orderContext } from './orderContext'

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
   const details = useRef<postPaymentRequest>({
      filmId: '',
      person: { firstname: '', lastname: '', middlename: '', phone: '' },
      debitCard: { pan: '', expireDate: '', cvv: '' },
      seance: { date: '', time: '' },
      tickets: []
   }).current

   const [stage, setStage] = useState(1)

   const setDetails = (obj: postPaymentRequest) => {
      details.filmId = obj.filmId
      details.person = obj.person
      details.debitCard = obj.debitCard
      details.seance = obj.seance
      details.tickets = obj.tickets
   }

   const setSeance = (date: string, time: string) => {
      details.seance = { date, time }
   }

   return (
      <orderContext.Provider value={{ details, setDetails, setSeance, stage, setStage }}>
         {children}
      </orderContext.Provider>
   )
}

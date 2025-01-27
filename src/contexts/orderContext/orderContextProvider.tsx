import { ReactNode, useState } from 'react'
import { orderContext } from './orderContext'

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
   const [details, setDetails] = useState<postPaymentRequest>({
      filmId: '',
      person: { firstname: '', lastname: '', middlename: '', phone: '' },
      debitCard: { pan: '', expireDate: '', cvv: '' },
      seance: { date: '', time: '' },
      tickets: []
   })

   const setSeance = (date: string, time: string) => {
      const copyDetails = { ...details }
      copyDetails.seance = { date, time }
      setDetails(copyDetails)
   }
   
   return (
      <orderContext.Provider value={{ details, setDetails, setSeance }}>
         {children}
      </orderContext.Provider>
   )
}

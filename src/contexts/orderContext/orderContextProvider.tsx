'use client'

import { ReactNode, useRef, useState } from 'react'

import { PostPaymentParams } from '@/api/requests/postPayment'

import { orderContext } from './orderContext'

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
   const details = useRef<PostPaymentParams>({
      filmId: '',
      person: { firstname: '', lastname: '', middlename: '', phone: '' },
      debitCard: { pan: '', expireDate: '', cvv: '' },
      seance: { date: '', time: '' },
      tickets: []
   }).current

   const [stage, setStage] = useState(1)

   const setDetails = (obj: PostPaymentParams) => {
      details.filmId = obj.filmId
      details.person = obj.person
      details.debitCard = obj.debitCard
      details.seance = obj.seance
      details.tickets = obj.tickets
   }

   const setSeance = (date: string, time: string) => {
      details.seance = { date, time }
   }

   const setTickets = (matrix: { [key: number]: number[] }) => {
      details.tickets = []
      Object.keys(matrix).forEach((row) => {
         matrix[+row].forEach((item, index) => {
            if (item > 0) {
               details.tickets.push({ row: +row, column: index + 1 })
            }
         })
      })
   }

   return (
      <orderContext.Provider value={{ details, setDetails, setSeance, setTickets, stage, setStage }}>
         {children}
      </orderContext.Provider>
   )
}

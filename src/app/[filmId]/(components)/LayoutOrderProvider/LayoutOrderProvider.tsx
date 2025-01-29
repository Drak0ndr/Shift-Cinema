'use client'

import { ReactNode } from 'react'

import { OrderContextProvider } from '@/contexts/orderContext/orderContextProvider'

export  const LayoutOrderProvider = ({ children }: { children: ReactNode }) => {
   return <OrderContextProvider>{children}</OrderContextProvider>
}

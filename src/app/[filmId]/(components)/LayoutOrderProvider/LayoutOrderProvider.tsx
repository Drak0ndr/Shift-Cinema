'use client'

import { OrderContextProvider } from '@/contexts/orderContext/orderContextProvider'
import { ReactNode } from 'react'

export  const LayoutOrderProvider = ({ children }: { children: ReactNode }) => {
   return <OrderContextProvider>{children}</OrderContextProvider>
}

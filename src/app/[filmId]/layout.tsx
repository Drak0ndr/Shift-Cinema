'use client'

import { OrderContextProvider } from '@/contexts/orderContext/orderContextProvider'
import { ReactNode } from 'react'

const OrderLayout = ({ children }: { children: ReactNode }) => (
   <OrderContextProvider>{children}</OrderContextProvider>
)

export default OrderLayout
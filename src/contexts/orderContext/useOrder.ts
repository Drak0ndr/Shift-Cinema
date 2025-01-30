import { useContext } from 'react'

import { OrderContext } from './orderContext'

export const useOrder = () => useContext(OrderContext)

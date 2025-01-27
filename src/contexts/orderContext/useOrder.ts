import { useContext } from 'react'
import { orderContext } from './orderContext'

export const useOrder = () => useContext(orderContext)

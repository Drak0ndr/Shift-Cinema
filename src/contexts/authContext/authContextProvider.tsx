import { ReactNode, useEffect, useState } from 'react'
import { authContext } from './authContext'
import { getSession } from '@/api/requests/getSession'

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User>()
   const [token, setToken] = useState<string>()

   const logout = () => {
      setToken(undefined)
      setUser(undefined)
      document.cookie = `authToken=undefined`
      console.log('logout')
   }

   useEffect(() => {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      getSession(token)
         .then((data) => {
            setUser(data.data.user)
         })
         .catch(() => {})
      setToken(token)
   }, [])

   return (
      <authContext.Provider value={{ user, token, setUser, setToken, logout }}>
         {children}
      </authContext.Provider>
   )
}

import { ReactNode, useEffect, useState } from 'react'

import { getSession } from '@/api/requests/getSession'
import { getCookie } from '@/helpers/getCookie'

import { AuthContext } from './authContext'

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User>()
   const [token, setToken] = useState<string>()

   const logout = () => {
      setToken(undefined)
      setUser(undefined)
      document.cookie = 'authToken='
      console.log('logout')
   }

   const login = (token: string) => setToken(token)


   useEffect(() => {
      const localToken = getCookie('authToken')

      if (localToken) {
         getSession({})
            .then((data) => {
               console.log(localToken, data)
               setUser(data.data.user)
            })
            .catch(() => {})
         setToken(localToken)
      }
   }, [token])

   return (
      <AuthContext.Provider value={{ user, token, setUser, setToken, logout, login }}>
         {children}
      </AuthContext.Provider>
   )
}

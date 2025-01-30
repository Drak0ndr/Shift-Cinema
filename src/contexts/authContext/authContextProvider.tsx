'use client'

import { ReactNode, useEffect, useState } from 'react'

import { getSession } from '@/api/requests/getSession'
import { getCookie } from '@/helpers/getCookie'

import { AuthContext } from './authContext'

export const AuthContextProvider = ({
   defaultUser,
   defaultToken,
   children
}: {
   defaultUser?: User
   defaultToken?: string
   children: ReactNode
}) => {
   const [user, setUser] = useState<User | undefined>(defaultUser)
   const [token, setToken] = useState<string | undefined>(defaultToken)
   console.log(defaultUser, user)
   const logout = () => {
      setToken(undefined)
      setUser(undefined)
      document.cookie = 'authToken='
      console.log('logout')
   }

   const login = (token: string) => setToken(token)

   useEffect(() => {
      const localToken = getCookie('authToken')

      if (localToken != token) {
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

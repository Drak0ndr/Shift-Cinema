'use client'

import { createContext } from 'react'

interface AuthContext {
   user: User | undefined
   token: string | undefined
   setUser: (user: User) => void
   setToken: (token: string) => void
   logout: () => void
   login: (token: string) => void
}

export const AuthContext = createContext<AuthContext>({
   user: undefined,
   token: undefined,
   setUser: () => {},
   setToken: () => {},
   logout: () => {},
   login: () => {}
})

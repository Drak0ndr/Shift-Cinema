import axios from 'axios'

import { URL } from '@/constants/url'
import { getCookie } from '@/helpers/getCookie'
import { isSSR } from '@/helpers/isSSR'

export const instance = axios.create({
   baseURL: URL
})

instance.interceptors.request.use(async (config) => {
   let token: string | undefined
   if (isSSR) {
      const cookies = (await import('next/headers')).cookies
      const cookieStore = await cookies()
      token = await cookieStore.get('authToken')?.value
   } else {
      token = getCookie('authToken')
   }

   config.headers.Authorization = `Bearer ${token}`

   return config
})

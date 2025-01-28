import { instance } from '../instance'

export const getSession = (token: string) =>
   instance.get<GetSessionResponse>(`/users/session`, {
      headers: {
         Authorization: `Bearer ${token}`
      }
   })

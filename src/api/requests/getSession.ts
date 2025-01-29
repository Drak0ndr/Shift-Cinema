import { instance } from '../instance'

interface GetSessionProps {
   token: string
}

type getSessionRequestConfig = RequestConfig<GetSessionProps>

export const getSession = ({ params, config }: getSessionRequestConfig) =>
   instance.get<GetSessionResponse>(`/users/session`, {
      headers: {
         Authorization: `Bearer ${params.token}`
      },
      ...config
   })

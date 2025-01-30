import { instance } from '../instance'

interface GetSessionParams {
   token: string
}

type getSessionRequestConfig = RequestConfig<GetSessionParams>

export const getSession = ({ params, config }: getSessionRequestConfig) =>
   instance.get<GetSessionResponse>(`/users/session`, {
      headers: {
         Authorization: `Bearer ${params.token}`
      },
      ...config
   })

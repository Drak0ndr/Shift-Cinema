import { instance } from '../instance'

interface PostSigninProps {
   phone: string
   code: string
}

type postSigninRequestConfig = RequestConfig<PostSigninProps>

export const postSignin = ({ params, config }: postSigninRequestConfig) =>
   instance.post<PostSigninRespose>('/users/signin', params, config)

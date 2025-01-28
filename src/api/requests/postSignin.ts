import { instance } from '../instance'

export const postSignin = (phone: string, code: string) =>
   instance.post<PostSigninRespose>('/users/signin', { phone, code })

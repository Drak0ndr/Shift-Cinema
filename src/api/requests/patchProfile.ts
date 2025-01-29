import { instance } from '../instance'

interface PatchProfileProps {
   data: {
      profile: {
         firstname: string
         middlename: string
         lastname: string
         email: string
         city: string
      }
      phone: string
   }
   token: string
}

type patchProfileRequestConfig = RequestConfig<PatchProfileProps>

export const patchProfile = ({params, config} : patchProfileRequestConfig) =>
   instance.patch<PatchProfileResponce>('/users/profile', params.data, {
      headers: {
         Authorization: `Bearer ${params.token}`
      },
      ...config
   })

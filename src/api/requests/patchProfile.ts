import { instance } from '../instance'

interface PatchProfileRequest {
   profile: {
      firstname: string
      middlename: string
      lastname: string
      email: string
      city: string
   }
   phone: string
}

export const patchProfile = (data: PatchProfileRequest, token: string) =>
   instance.patch<PatchProfileResponce>('/users/profile', data, {
      headers: {
         Authorization: `Bearer ${token}`
      }
   })

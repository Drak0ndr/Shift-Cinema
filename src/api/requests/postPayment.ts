import { instance } from '../instance'

export const postPayment = (data: PostPaymentRequest) =>
   instance.post<PostPaymentResponse>('/cinema/payment', data)

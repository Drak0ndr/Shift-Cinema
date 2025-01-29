import { instance } from '../instance'

type postPaymentRequestConfig = RequestConfig<PostPaymentRequest>

export const postPayment = ({ params, config }: postPaymentRequestConfig) =>
   instance.post<PostPaymentResponse>('/cinema/payment', params, config)

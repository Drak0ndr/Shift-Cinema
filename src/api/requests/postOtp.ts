import { instance } from '../instance'

interface PostOtpProps {
   phone: string
}

type postOtpRequestConfig = RequestConfig<PostOtpProps>

export const postOtp = ({ params, config }: postOtpRequestConfig) =>
   instance.post<PostOtpRespose>('/auth/otp', { phone: params.phone }, config)

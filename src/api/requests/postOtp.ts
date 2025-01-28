import { instance } from '../instance'

export const postOtp = (phone: string) => instance.post<PostOtpRespose>('/auth/otp', { phone })

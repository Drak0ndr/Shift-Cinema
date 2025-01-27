import { instance } from '../instance'

export const getToday = () => instance.get<getTodayResponse>('/cinema/today')

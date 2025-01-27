import { instance } from '../instance'

export const getToday = () => instance.get<GetTodayResponse>('/cinema/today')

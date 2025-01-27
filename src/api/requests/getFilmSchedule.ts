import { instance } from '../instance'

export const getFilmSchedule = (id: string) => instance.get<getFilmScheduleResponse>(`/cinema/film/${id}/schedule`)

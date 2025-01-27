import { instance } from '../instance'

export const getFilmSchedule = (id: string) => instance.get<GetFilmScheduleResponse>(`/cinema/film/${id}/schedule`)

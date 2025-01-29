import { instance } from '../instance'

export interface GetFilmScheduleProps {
   id: string
}

type getFilmScheduleRequestConfig = RequestConfig<GetFilmScheduleProps>

export const getFilmSchedule = ({ params, config }: getFilmScheduleRequestConfig) =>
   instance.get<GetFilmScheduleResponse>(`/cinema/film/${params.id}/schedule`, config)

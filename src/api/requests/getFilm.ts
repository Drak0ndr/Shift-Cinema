import { instance } from '../instance'

interface GetFilmProps {
   id: string
}

type getFilmRequestConfig = RequestConfig<GetFilmProps>

export const getFilm = ({ params, config }: getFilmRequestConfig) =>
   instance.get<GetFilmResponse>(`/cinema/film/${params.id}`, config)

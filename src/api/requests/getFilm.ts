import { instance } from '../instance'

export const getFilm = (id: string) => instance.get<GetFilmResponse>(`/cinema/film/${id}`)

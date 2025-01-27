import { instance } from '../instance'

export const getFilm = (id: string) => instance.get<getFilmResponse>(`/cinema/film/${id}`)

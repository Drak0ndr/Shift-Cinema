import { useQuery } from '@tanstack/react-query'
import { getFilmSchedule } from '../requests/getFilmSchedule'

export const useGetFilmScheduleQuery = (filmId: string) =>
   useQuery({
      queryKey: ['getFilmSchedule'],
      queryFn: () => getFilmSchedule(filmId),
      refetchInterval: 30000
   })

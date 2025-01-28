import { ReactNode } from 'react'
import { LayoutOrderProvider } from './(components)/LayoutOrderProvider/LayoutOrderProvider'
import { getFilm } from '@/api/requests/getFilm'

export async function generateMetadata({ params }: { params: { filmId: string } }) {
   const getFilmResponse = await getFilm(params.filmId)
   return {
      title: `${getFilmResponse.data.film.name} - ШИФТ CINEMA`
   }
}

const OrderLayout = ({ children }: { children: ReactNode }) => {
   return <LayoutOrderProvider>{children}</LayoutOrderProvider>
}

export default OrderLayout

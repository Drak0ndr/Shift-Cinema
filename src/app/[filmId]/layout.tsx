import { ReactNode } from 'react'

import { getFilm } from '@/api/requests/getFilm'

import { LayoutOrderProvider } from './(components)/LayoutOrderProvider/LayoutOrderProvider'

export async function generateMetadata({ params }: { params: { filmId: string } }) {
   const getFilmResponse = await getFilm({ params: { id: params.filmId } })
   
   return {
      title: `${getFilmResponse.data.film.name} - ШИФТ CINEMA`
   }
}

const OrderLayout = ({ children }: { children: ReactNode }) => {
   return <LayoutOrderProvider>{children}</LayoutOrderProvider>
}

export default OrderLayout

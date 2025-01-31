import { Box, Button, Flex, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useGetFilmScheduleQuery } from '@/api/hooks/useGetFilmScheduleQuery'
import { HALLS } from '@/constants/halls'
import { MONTHS } from '@/constants/months'
import { useOrder } from '@/contexts/order/useOrder'
import { calcOrderPrice } from '@/utils/calcOrderPrice'
import { getActiveRowPlaces } from '@/utils/getActiveRowPlaces'
import { getDate } from '@/utils/getDate'
import { getHall } from '@/utils/getHall'
import { getPlaces } from '@/utils/getPlaces'

import { Matrix } from './components/Matrix/Matrix'
import { TicketsForm } from './components/TicketsForm/TicketsForm'
import styles from './Stage1.module.css'
import { useMediaQuery } from '@mantine/hooks'

export const Stage1 = () => {
   const order = useOrder()
   const [selectedPlace, setSelectedPlace] = useState<Record<number, number[]>>()
   const params = useParams()

   const isMobile = useMediaQuery('(width <= 500px)')

   const getFilmScheduleResponse = useGetFilmScheduleQuery({ id: order.details.filmId })

   const places =
      getFilmScheduleResponse.data &&
      getPlaces(
         order.details.seance.date,
         order.details.seance.time,
         getFilmScheduleResponse.data?.data.schedules
      )

   useEffect(() => {
      if (getFilmScheduleResponse.data) {
         const basePlaes: Record<number, number[]> = {}

         if (places) {
            places.forEach((item, index) => {
               basePlaes[index + 1] = Array(item.length).fill(0)
            })
         }

         setSelectedPlace(basePlaes)
      }
   }, [getFilmScheduleResponse.isLoading])

   return (
      <>
         <Flex direction="column" className={styles.matrix_container}>
            {!isMobile && (
               <Box pl={40}>
                  <Text size="xs" ta="center">
                     Экран
                  </Text>
                  <Box className={styles.screen}></Box>
               </Box>
            )}

            {!isMobile && <Matrix value={selectedPlace} places={places} onChange={setSelectedPlace} />}
            {isMobile && (
               <TicketsForm value={selectedPlace} places={places} onChange={setSelectedPlace} />
            )}
            <Box>
               <Text size="xs" c="#637083">
                  Зал
               </Text>
               <Text>
                  {getFilmScheduleResponse.data &&
                     HALLS[
                        getHall(
                           order.details.seance.date,
                           order.details.seance.time,
                           getFilmScheduleResponse.data?.data.schedules
                        )
                     ]}
               </Text>
            </Box>
            <Box>
               <Text size="xs" c="#637083">
                  Дата и время
               </Text>
               <Text>{`${getDate(order.details.seance.date).getDate()} ${MONTHS[getDate(order.details.seance.date).getMonth()]} ${order.details.seance.time}`}</Text>
            </Box>
            <Box>
               <Text size="xs" c="#637083">
                  Места
               </Text>
               {selectedPlace &&
                  Object.keys(selectedPlace).map((row) => {
                     const activePlaces = getActiveRowPlaces(selectedPlace[+row])
                     if (activePlaces.length > 0) {
                        return (
                           <Text key={row}>
                              {row} ряд - {activePlaces.join(', ')}
                           </Text>
                        )
                     }
                  })}
            </Box>
            <Title order={3}>
               Сумма: {selectedPlace && places && calcOrderPrice(selectedPlace, places)} ₽
            </Title>
         </Flex>
         <Flex mt={24} gap={24} maw={368} wrap="wrap-reverse">
            <Button variant="default" miw={170} flex={1} component={Link} href={`/${params.filmId}`}>
               Назад
            </Button>
            <Button
               miw={170}
               flex={1}
               onClick={() => {
                  order.setStage(order.stage + 1)
                  order.setTickets(selectedPlace ? selectedPlace : [])
               }}
            >
               Купить
            </Button>
         </Flex>
      </>
   )
}

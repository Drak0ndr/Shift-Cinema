import { Box, Button, Flex, Text, Title, Tooltip } from '@mantine/core'
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

import styles from './Stage1.module.css'

export const Stage1 = () => {
   const { details, setTickets, stage, setStage } = useOrder()
   const [selectedPlace, setSelectedPlace] = useState<{ [key: number]: number[] }>()
   const params = useParams()

   const getFilmScheduleResponse = useGetFilmScheduleQuery({ id: details.filmId })

   useEffect(() => {
      if (getFilmScheduleResponse.data) {
         console.log(getFilmScheduleResponse.data.data)
         const places = getPlaces(
            details.seance.date,
            details.seance.time,
            getFilmScheduleResponse.data?.data.schedules
         )
         const obj: { [key: number]: number[] } = {}
         places.forEach((item, index) => {
            obj[index + 1] = Array(item.length).fill(0)
         })
         setSelectedPlace(obj)
      }
   }, [getFilmScheduleResponse.isLoading])

   const togglePlace = (row: number, place: number) => {
      const matrix = { ...selectedPlace }
      matrix[row][place] = Number(!selectedPlace![row][place])
      setSelectedPlace(matrix)
   }

   return (
      <>
         <Flex direction="column" gap={24} w="fit-content" mt={48}>
            <Box pl={40}>
               <Text size="xs" ta="center">
                  Экран
               </Text>
               <Box className={styles.screen}></Box>
            </Box>
            <Text size="xs">Ряд</Text>
            {selectedPlace &&
               getFilmScheduleResponse.data &&
               getPlaces(
                  details.seance.date,
                  details.seance.time,
                  getFilmScheduleResponse.data?.data.schedules
               ).map((row, indexRow) => (
                  <Flex key={indexRow} gap={24}>
                     <Text size="sm" miw={16}>
                        {indexRow + 1}
                     </Text>
                     {row.map((item, indexCol) =>
                        item.type != 'BLOCKED' && item.type != 'PAYED' ? (
                           <Tooltip
                              key={indexCol}
                              bg="white"
                              label={
                                 <>
                                    <Text size="xs" c="#141C24">{`${item.price} ₽`}</Text>
                                    <Text
                                       size="xs"
                                       c="#637083"
                                    >{`${indexRow + 1} ряд, ${indexCol + 1} место`}</Text>
                                 </>
                              }
                           >
                              <Flex
                                 justify="center"
                                 align="center"
                                 className={`${styles.place} ${selectedPlace[indexRow + 1][indexCol] ? styles.active : ''}`}
                                 onClick={() => togglePlace(indexRow + 1, indexCol)}
                              >
                                 <Text size="8px" c="white">
                                    {selectedPlace[indexRow + 1][indexCol] ? indexCol + 1 : ''}
                                 </Text>
                              </Flex>
                           </Tooltip>
                        ) : (
                           <Flex
                              key={indexCol}
                              className={`${styles.place} ${item.type == 'BLOCKED' ? styles.blocked : styles.payed}`}
                           ></Flex>
                        )
                     )}
                  </Flex>
               ))}

            <Box>
               <Text size="xs" c="#637083">
                  Зал
               </Text>
               <Text>
                  {getFilmScheduleResponse.data &&
                     HALLS[
                        getHall(
                           details.seance.date,
                           details.seance.time,
                           getFilmScheduleResponse.data?.data.schedules
                        )
                     ]}
               </Text>
            </Box>
            <Box>
               <Text size="xs" c="#637083">
                  Дата и время
               </Text>
               <Text>{`${getDate(details.seance.date).getDate()} ${MONTHS[getDate(details.seance.date).getMonth()]} ${details.seance.time}`}</Text>
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
               Сумма:{' '}
               {selectedPlace &&
                  getFilmScheduleResponse.data &&
                  calcOrderPrice(
                     selectedPlace,
                     getPlaces(
                        details.seance.date,
                        details.seance.time,
                        getFilmScheduleResponse.data?.data.schedules
                     )
                  )}{' '}
               ₽
            </Title>
         </Flex>
         <Flex mt={24} gap={24} wrap="wrap-reverse">
            <Button variant="default" p="16px 57px" component={Link} href={`/${params.filmId}`}>
               Назад
            </Button>
            <Button
               p="16px 57px"
               onClick={() => {
                  setStage(stage + 1)
                  setTickets(selectedPlace ? selectedPlace : [])
               }}
            >
               Купить
            </Button>
         </Flex>
      </>
   )
}

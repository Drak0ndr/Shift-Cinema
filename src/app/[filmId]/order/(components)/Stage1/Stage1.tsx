import { Box, Button, Flex, Text, Title, Tooltip } from '@mantine/core'

import styles from './Stage1.module.css'
import { useEffect, useState } from 'react'
import { useOrder } from '@/contexts/orderContext/useOrder'
import { useGetFilmScheduleQuery } from '@/api/hooks/useGetFilmScheduleQuery'
import { getPlaces } from '@/utils/getPlaces'
import { getHall } from '@/utils/getHall'
import { HALLS } from '@/constants/halls'
import { getDate } from '@/utils/getDate'
import { MONTHS } from '@/constants/months'
import { getActiveRowPlaces } from '@/utils/getActiveRowPlaces'
import { calcOrderPrice } from '@/utils/calcOrderPrice'

export const Stage1 = () => {
   const { details, setTickets, stage, setStage } = useOrder()
   const [selectedPlace, setSelectedPlace] = useState<{ [key: number]: number[] }>()

   const getFilmScheduleResponse = useGetFilmScheduleQuery(details.filmId)

   useEffect(() => {
      if (getFilmScheduleResponse.data) {
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
                        item.type != 'BLOCKED' ? (
                           <Tooltip
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
                                 key={indexCol}
                                 className={`${styles.place} ${selectedPlace[indexRow + 1][indexCol] ? styles.active : ''}`}
                                 onClick={() => togglePlace(indexRow + 1, indexCol)}
                              >
                                 <Text size="8px" c="white">
                                    {selectedPlace[indexRow + 1][indexCol] ? indexCol + 1 : ''}
                                 </Text>
                              </Flex>
                           </Tooltip>
                        ) : (
                           <Flex className={`${styles.place} ${styles.blocked}`}></Flex>
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
                           <Text>
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
         <Flex mt={24} gap={24}>
            <Button variant="outline" size="md" radius={16} p="16px 57px" h="auto">
               Назад
            </Button>
            <Button
               size="md"
               radius={16}
               p="16px 57px"
               h="auto"
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

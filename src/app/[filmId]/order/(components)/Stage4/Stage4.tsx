'use client'

import { Box, Button, Card, Flex, Text } from '@mantine/core'

import styles from './Stage4.module.css'
import { useOrder } from '@/contexts/orderContext/useOrder'
import { usePostPaymentQuery } from '@/api/hooks/usePostPaymentQuery'
import { useEffect } from 'react'
import { getOrderPlaces } from '@/utils/getOrderPlaces'
import { getDate } from '@/utils/getDate'
import { MONTHS } from '@/constants/months'
import Link from 'next/link'

export const Stage4 = () => {
   const { details } = useOrder()

   const postPaymentResponse = usePostPaymentQuery(details)

   useEffect(() => {
      console.log(postPaymentResponse)
   })

   return (
      <>
         {' '}
         <Card withBorder className={styles.card}>
            <Box>
               <Text size="xs" c="#637083">
                  Номер билета
               </Text>
               <Text>
                  {!postPaymentResponse.isLoading && postPaymentResponse.data?.data.order.orderNumber}
               </Text>
            </Box>
            <Box>
               <Text size="xs" c="#637083">
                  Фильм
               </Text>
               <Text>
                  {!postPaymentResponse.isLoading && postPaymentResponse.data?.data.order.filmName}
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
               {postPaymentResponse.data &&
                  getOrderPlaces(postPaymentResponse.data?.data.order.tickets).map((item) => (
                     <Text key={item.row}>{`${item.row} ряд -  ${item.columns.join(', ')}`}</Text>
                  ))}
            </Box>
            <Text size="sm" c="#637083">
               Вся информация была продублирована в SMS
            </Text>
         </Card>
         <Flex mt={24} gap={24}>
            <Button
               variant="outline"
               size="md"
               radius={16}
               p="16px"
               h="auto"
               miw={172}
               component={Link}
               href="/tickets"
            >
               Детали заказа
            </Button>
            <Button size="md" radius={16} h="auto" p="16px" miw={172} component={Link} href="/">
               На главную
            </Button>
         </Flex>
      </>
   )
}

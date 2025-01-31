'use client'

import { Box, Button, Card, Flex, Text } from '@mantine/core'
import Link from 'next/link'

import { usePostPaymentQuery } from '@/api'
import { MONTHS } from '@/constants'
import { useOrder } from '@/contexts'
import { getDate, getOrderPlaces } from '@/utils'

import styles from './Stage4.module.css'

export const Stage4 = () => {
   const { details } = useOrder()

   const postPaymentResponse = usePostPaymentQuery(details)

   return (
      <>
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
         <Flex mt={24} gap={24} wrap="wrap-reverse">
            <Button variant="default" miw={172} component={Link} href="/orders">
               Детали заказа
            </Button>
            <Button miw={172} component={Link} href="/">
               На главную
            </Button>
         </Flex>
      </>
   )
}

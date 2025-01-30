'use client'

import { Box, Button, Card, Flex, Text } from '@mantine/core'
import Link from 'next/link'

import { usePostPaymentQuery } from '@/api/hooks/usePostPaymentQuery'
import { MONTHS } from '@/constants/months'
import { useOrder } from '@/contexts/orderContext/useOrder'
import { getDate } from '@/utils/getDate'
import { getOrderPlaces } from '@/utils/getOrderPlaces'

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
         <Flex mt={24} gap={24}>
            <Button
               variant="default"
               miw={172}
               component={Link}
               href="/orders"
            >
               Детали заказа
            </Button>
            <Button miw={172} component={Link} href="/">
               На главную
            </Button>
         </Flex>
      </>
   )
}

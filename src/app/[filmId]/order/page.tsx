'use client'
import { Box, Button, Flex, Image, Progress, Text, Title } from '@mantine/core'
import { Stage1 } from './(components)/Stage1/Stage1'
import { Stage2 } from './(components)/Stage2/Stage2'
import { Stage3 } from './(components)/Stage3/Stage3'
import { Stage4 } from './(components)/Stage4/Stage4'
import { useOrder } from '@/contexts/orderContext/useOrder'
import { useEffect } from 'react'

const Order = ({ params }: { params: { filmId: string } }) => {
   console.log(params)
   const { details, stage, setStage } = useOrder()
   useEffect(() => {
      console.log(details)
   }, [stage])
   return (
      <>
         <Flex gap={24} align="center">
            {stage == 4 && <Image src="/Success.svg" />}
            <Title order={2} mt={48}>
               {stage == 1 && 'Выбор места'}
               {stage == 2 && 'Введите ваши данные'}
               {stage == 3 && 'Введите данные карты для оплаты'}
               {stage == 4 && 'Оплата прошла успешно!'}
            </Title>
         </Flex>

         {stage < 4 && (
            <Box mt={24} mb={24}>
               <Text>Шаг {stage} из 3</Text>
               <Progress color="#40BF7F" value={(stage / 3) * 100} maw={368} />
            </Box>
         )}

         {stage == 1 && <Stage1 />}
         {stage == 2 && <Stage2 />}
         {stage == 3 && <Stage3 />}
         {stage == 4 && <Stage4 />}

      </>
   )
}

export default Order

'use client'
import { Box, Flex, Image, Progress, Text, Title } from '@mantine/core'

import { useOrder } from '@/contexts/orderContext/useOrder'

import { Stage1 } from './(components)/Stage1/Stage1'
import { Stage2 } from './(components)/Stage2/Stage2'
import { Stage3 } from './(components)/Stage3/Stage3'
import { Stage4 } from './(components)/Stage4/Stage4'

const Order = () => {
   const { stage } = useOrder()

   return (
      <>
         <Flex gap={24} align="center" mt={48}>
            {stage == 4 && <Image src="/Success.jpg" />}
            <Title order={2}>
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

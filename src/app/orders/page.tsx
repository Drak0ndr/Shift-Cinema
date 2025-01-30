import { Flex, Title } from '@mantine/core'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { OrdersTabs } from './(components)/OrdersTabs/OrdersTabs'

export const metadata: Metadata = {
   title: 'Билеты - ШИФТ CINEMA'
}

const Orders = async () => {
   const cookieStore = await cookies()
   const token = cookieStore.get('authToken')?.value

   if (!token) redirect('/auth')

   return (
      <Flex direction="column" gap={24} mt={48}>
         <Title order={2}>Заказы</Title>
         <OrdersTabs />
      </Flex>
   )
}

export default Orders

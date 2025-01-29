import {  Flex, Title } from '@mantine/core'

import { OrdersTabs } from './(components)/OrdersTabs/OrdersTabs'

const Orders = () => {
   return (
      <Flex direction="column" gap={24} mt={48}>
         <Title order={2}>Заказы</Title>
         <OrdersTabs />
      </Flex>
   )
}

export default Orders

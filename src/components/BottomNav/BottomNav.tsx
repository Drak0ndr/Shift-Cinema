import { Flex, Image, Text } from '@mantine/core'

import styles from './BottomNav.module.css'

export const BottomNav = () => (
   <Flex className={styles.bottom_nav}>
      <Flex direction="column" justify="center" align="center" flex={1} h={57}>
         <Image src="/Movie.svg" w="auto" />
         <Text size="10px" lh="12px" c="#637083">
            Афиша
         </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center" flex={1} h={57}>
         <Image src="/Ticket.svg" w="auto" />
         <Text size="10px" lh="12px" c="#637083">
            Билеты
         </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center" flex={1} h={57}>
         <Image src="/User.svg" w="auto" />
         <Text size="10px" lh="12px" c="#637083">
            Профиль
         </Text>
      </Flex>
   </Flex>
)

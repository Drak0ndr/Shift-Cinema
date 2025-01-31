import { Flex, Text } from '@mantine/core'
import Link from 'next/link'

import { ROUTES } from '@/constants/routes'
import { MovieIcon } from '@/icons/MovieIcon'
import { TicketIcon } from '@/icons/TicketIcon'
import { UserIcon } from '@/icons/UserIcon'

import styles from './BottomNav.module.css'

export const BottomNav = () => (
   <Flex className={styles.bottom_nav}>
      <Flex
         direction="column"
         justify="center"
         align="center"
         flex={1}
         h={57}
         component={Link}
         href={ROUTES.ROOT}
      >
         <MovieIcon />
         <Text size="10px" lh="12px" c="#637083">
            Афиша
         </Text>
      </Flex>
      <Flex
         direction="column"
         justify="center"
         align="center"
         flex={1}
         h={57}
         component={Link}
         href={ROUTES.ORDERS}
      >
         <TicketIcon />
         <Text size="10px" lh="12px" c="#637083">
            Билеты
         </Text>
      </Flex>
      <Flex
         direction="column"
         justify="center"
         align="center"
         flex={1}
         h={57}
         component={Link}
         href={ROUTES.PROFILE}
      >
         <UserIcon />
         <Text size="10px" lh="12px" c="#637083">
            Профиль
         </Text>
      </Flex>
   </Flex>
)

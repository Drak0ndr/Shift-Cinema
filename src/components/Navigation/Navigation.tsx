import { Box, Flex, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/constants/routes'
import { TicketIcon } from '@/icons/TicketIcon'
import { UserIcon } from '@/icons/UserIcon'

import styles from './Navigation.module.css'

export const Navigation = () => (
   <Box component="nav" className={styles.nav}>
      <Flex align="center" gap={32} className={styles.container}>
         <Flex align="end" component={Link} href={ROUTES.ROOT}>
            <Box>
               <Text c="#9534D2" fw={600} size="14px" lh="17px">
                  Шифт
               </Text>
               <Text c="#9534D2" fw={600} size="14px" lh="17px">
                  CINEMA
               </Text>
            </Box>
            <Image
               src="/Logo.svg"
               width={61}
               height={38}
               alt="logo"
               style={{ transform: 'translate(-8px)' }}
            />
         </Flex>
         <Flex align="center" gap={16} component={Link} href={ROUTES.PROFILE}>
            <UserIcon />
            <Text>Профиль</Text>
         </Flex>
         <Flex align="center" gap={16} component={Link} href={ROUTES.ORDERS}>
            <TicketIcon />
            <Text>Билеты</Text>
         </Flex>
      </Flex>
   </Box>
)

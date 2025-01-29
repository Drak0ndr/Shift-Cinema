import { Box, Flex, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Navigation.module.css'

export const Navigation = () => (
   <Box component="nav" className={styles.nav}>
      <Flex align="center" gap={32} className={styles.container}>
         <Flex align="end" component={Link} href="/">
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
         <Flex align="center" gap={16} component={Link} href="/profile">
            <Image src="/User.svg" width={24} height={24} alt="user"></Image>
            <Text>Профиль</Text>
         </Flex>
         <Flex align="center" gap={16} component={Link} href="/tickets">
            <Image src="/Ticket.svg" width={24} height={24} alt="user"></Image>
            <Text>Билеты</Text>
         </Flex>
      </Flex>
   </Box>
)
